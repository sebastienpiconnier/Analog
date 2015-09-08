/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    var myPanelPath = csInterface.getSystemPath(SystemPath.EXTENSION);
    
    function init() {
                
        themeManager.init();
        
        $("#btn_randomAnalog").click(function () {
            csInterface.evalScript("randomAnalog('" + myPanelPath + "');");
        });
        
        $("#btn_undo").click(function () {
            csInterface.evalScript('undo()');
        });
        
        $("#btn_darkRainbow").click(function () {
            csInterface.evalScript("darkRainbow('" + myPanelPath + "');");
        });
        
        $("#btn_marshall").click(function () {
            csInterface.evalScript("marshall('" + myPanelPath + "');");
        });
        
        $("#btn_oldPola").click(function () {
            csInterface.evalScript("oldPola('" + myPanelPath + "');");
        });
        
        $("#btn_soLovely").click(function () {
            csInterface.evalScript("soLovely('" + myPanelPath + "');");
        });
        
        $("#btn_yellowishSky").click(function () {
            csInterface.evalScript("yellowishSky('" + myPanelPath + "');");
        });
        
        $("#btn_pastel").click(function () {
            csInterface.evalScript("pastel('" + myPanelPath + "');");
        });
                
        $("#btn_blueRay").click(function () {
            csInterface.evalScript("blueRay('" + myPanelPath + "');");
        });
        
        $("#btn_blueJeansDay").click(function () {
            csInterface.evalScript("blueJeansDay('" + myPanelPath + "');");
        });
        
        $("#btn_greeny").click(function () {
            csInterface.evalScript("greeny('" + myPanelPath + "');");
        });

        $("#btn_dirtyBlackWhite").click(function () {
            csInterface.evalScript("dirtyBlackWhite('" + myPanelPath + "');");
        });
        
        $("#btn_lightLeak").click(function () {
            csInterface.evalScript("lightLeak('" + myPanelPath + "');");
        });
        
        $("#btn_changeFrame").click(function () {
            csInterface.evalScript("changeFrame('" + myPanelPath + "');");
        });
        
        $("#btn_changeTexture").click(function () {
            csInterface.evalScript("changeTexture('" + myPanelPath + "');");
        });
        
        $("#btn_changeVignetting").click(function () {
            csInterface.evalScript("changeVignetting('" + myPanelPath + "');");
        });
        
        $("#btn_changeFilter").click(function () {
            csInterface.evalScript("changeFilter('" + myPanelPath + "');");
        });
        
        $("#btn_blackWhite").click(function () {
            csInterface.evalScript('blackWhite()');
        });
        
        $("#btn_newSnapshot").click(function () {
            csInterface.evalScript('newSnapshot()');
        });
    }
        
    init();

}());
    
