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
    }
        
    init();

}());
    
