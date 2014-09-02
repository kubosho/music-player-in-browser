(function (exports) {
    'use strict';

    function BrowserMusicPlayer () {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
    }

    /**
     * ファイルをFileReader.readAsDataURL()を使って読み込み、FileReaderオブジェクトを返します
     * @param file {File}
     * @returns {FileReader}
     */
    BrowserMusicPlayer.prototype.loadingMusic = function (file) {
        if (!this.isMusicFile(file)) {
            throw new Error('Not a music file');
        }

        var reader = new FileReader();
        reader.readAsDataURL(file);
        return reader;
    };

    /**
     * 指定されたファイルが音楽ファイルかどうか調べ、その結果を真偽値で返します
     * @param file {File}
     * @returns {boolean}
     */
    BrowserMusicPlayer.prototype.isMusicFile = function (file) {
        var type = file.type.substring(6, 9);
        return /(mp3|wav|ogg|wma|m4a)/.test(type);
    };

    /**
     * audio要素を作ります。src属性の値は引数で指定されたものになります
     * @param src {string}
     * @returns {HTMLElement}
     */
    BrowserMusicPlayer.prototype.createAudioElement = function (src) {
        var audio = document.createElement('audio');
        return audio;
    };

    BrowserMusicPlayer.prototype.play = function () {
    };

    BrowserMusicPlayer.prototype.stop = function () {
    };

    BrowserMusicPlayer.prototype.rewind = function () {
    };

    BrowserMusicPlayer.prototype.forward = function () {
    };

    exports.BrowserMusicPlayer = BrowserMusicPlayer;
})(window);