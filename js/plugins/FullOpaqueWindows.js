/*:
 * @plugindesc Deixa todas as janelas com opacidade 100% (sem transparência no fundo) - FullOpaqueWindows
 * @author ChatGPT
 */

(function() {
    const _Window_Base_initialize = Window_Base.prototype.initialize;
    Window_Base.prototype.initialize = function(x, y, width, height) {
        _Window_Base_initialize.call(this, x, y, width, height);
        this.opacity = 255;            // Borda da janela
        this._windowBackSprite.opacity = 255;  // Fundo da janela
    };
})();