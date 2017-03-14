/*! ${npm_package_name} ${npm_package_version} ${npm_package_homepage} @license MIT */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.markdownitBr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Process <br>

'use strict';

module.exports = function br_plugin(md) {

  function tokenize(state, silent) {
    var token,
        max = state.posMax,
        start = state.pos,
        marker = state.src.charCodeAt(start);
    if (start + 4 > max) { return false; } // <br> length
    if (silent) { return false; } // don't run any pairs in validation mode

    if (marker === 60 /* < */ &&
      (state.src.charCodeAt(start + 1) === 66 || state.src.charCodeAt(start + 1) === 98) /* B or b */ &&
      (state.src.charCodeAt(start + 2) === 82 || state.src.charCodeAt(start + 2) === 114) /* R or r */ &&
      state.src.charCodeAt(start + 3) === 62 /* > */
      ) {
      state.scanDelims(state.pos, true);
      token         = state.push('text', '', 0);
      token.content = '<br>';
      state.delimiters.push({
        marker: token.content,
        jump:   0,
        token:  state.tokens.length - 1,
        level:  state.level,
        end:    -1,
        open:   true,
        close:  true
      });
    } else {
      // neither
      return false;
    }

    state.pos += 4;

    return true;
  }


  // Walk through delimiter list and replace text tokens with tags
  //
  function postProcess(state) {
    var i,
        delim,
        token,
        delimiters = state.delimiters,
        max = state.delimiters.length;

    for (i = 0; i < max; i++) {
      delim = delimiters[i];

      if (delim.marker === '<br>') {
        token         = state.tokens[delim.token];
        token.type    = 'br_openclose';
        token.tag     = 'br';
        token.nesting = 1;
        token.markup  = '<br>';
        token.content = '';
      }
    }
  }

  md.inline.ruler.before('emphasis', 'br', tokenize);
  md.inline.ruler2.before('emphasis', 'br', postProcess);
};

},{}]},{},[1])(1)
});