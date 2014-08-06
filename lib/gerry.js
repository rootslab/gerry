/*
 * Gerry, a tiny module for event logging.
 *
 * Copyright(c) 2014 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */

exports.version = require( '../package' ).version;
exports.Gerry = ( function () {
    var log = console.log
        , util = require( 'util' )
        , EventEmitter = require( 'events' ).EventEmitter
        , Bolgia = require( 'bolgia' )
        , inspect = util.inspect
        , isArray = Array.isArray
        , aPush = Array.prototype.push
        , aSlice = Array.prototype.slice
        , simpleLog = function ( ename, args ) {
            log( '!%s: %s', ename, inspect( args, false, 10, true ) );
        }
        , addLogListener = function ( ename ) {
            var me = this
                , emt = me.emt
                , listeners = me.listeners
                , logger = me.logger
                , logFn = function () {
                    logger( ename, aSlice.call( arguments ) );
                };
            listeners.push( logFn );
            emt.on( ename, logFn );
        }
        // Gerry
        , Gerry = function ( emt, arr, lfn ) {
            var me = this
                , is = me instanceof Gerry
                , ok = emt instanceof EventEmitter
                ;
            if ( ! ok ) throw new Error( 'Gerry, error: the first argument should be an instance of EventEmitter!' );
            if ( ! is ) return new Gerry( emt, arr, lfn );
            // update default list returning a new array
            me.list = isArray( arr ) ? arr.concat() : [];
            me.emt = emt;
            me.listeners = [];
            me.logger = typeof lfn === 'function' ? lfn : simpleLog;
            
        }
        , gproto = null
        ;

    util.inherits( Gerry, EventEmitter );

    gproto = Gerry.prototype;

    gproto.enable = function ( lfn ) {
        var me = this
            , emt = me.emt
            , listeners = me.listeners
            , llen = listeners.length
            , list = me.list
            , elen = list.length
            , i = 0
            ;
        if ( llen ) {
            i = llen;
            // check offset
            if ( elen - i > 0 ) return;
            // update cli with new events from offset index
        }
        me.logger = typeof lfn === 'function' ? lfn : simpleLog;
        for ( ; i < elen; ++i ) addLogListener.call( me, list[ i ] );
        return me;
    };

    gproto.disable = function () {
        var me = this
            , emt = me.emt
            , listeners = me.listeners
            , llen = listeners.length
            , list = me.list
            , i = 0
            ;
        if ( ! llen ) return;
        // remove all listeners for logging
        for ( ; i < llen; i++ ) emt.removeListener( list[ i ], listeners[ i ] );
        me.listeners = [];
        return me;
    };

    gproto.push = function () {
         var me = this
            , args = aSlice.call( arguments )
            , alen = args.length
            , i = 0
            , evt = args[ 0 ]
            , evts = []
            ;
        for ( ; i < alen; evt = args[ ++i ] ) {
            if ( ~ me.list.indexOf( evt ) ) continue;
            evts.push( evt );
            addLogListener.call( me, evt );
        };
        return aPush.apply( me.list, evts );
    };

    gproto.size = function () {
        var me = this
            ;
        return me.list.length;
    };

    gproto.flush = function () {
        var me = this
            , listeners = me.listeners
            , llen = listeners.length
            , list = me.list
            , i = 0
            ;
        if ( llen ) for ( ; i < llen; i++ ) emt.removeListener( list[ i ], listeners[ i ] );
        me.list = [];
        me.listeners = []
        return me;
    };

    return Gerry;

} )();