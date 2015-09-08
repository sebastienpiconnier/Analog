/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

function randomAnalog(inPanelLocation){
// =======================================================    
//  Paramétrage de Adobe(r) Photoshop(r) pour utiliser l'unité en pixels
// =======================================================
var startRulerUnits = app.preferences.rulerUnits 
var startTypeUnits = app.preferences.typeUnits 

app.preferences.rulerUnits = Units.PIXELS 
app.preferences.typeUnits = TypeUnits.PIXELS

// =======================================================
// Affiche une alerte si aucun document n'est ouvert
// =======================================================

if ( app.documents.length <= 0 ) {alert("You must open a document! / Vous devez d'abord ouvrir un document!");}
    // =======================================================
//  Recadrage du document en carré
// =======================================================
if (app.documents.length > 0) {    

 var docRef = app.activeDocument;
 var WidthRatio = 1;
 var HeightRatio = 1;
 var boundTop;
 var boundLeft;
 var boundRight;
 var boundBottom;

// Image's aspect ratio is greater than the desired ratio
// so crop out left and right areas of the Image
if ((docRef.width / docRef.height) > (WidthRatio/ HeightRatio))
{
 boundTop = 0;
 boundLeft = ((docRef.width - (docRef.height * (WidthRatio/HeightRatio))) / 2);
 boundBottom = docRef.height;
 boundRight = ((docRef.width + (docRef.height * (WidthRatio/HeightRatio))) / 2);
 bounds = new Array(boundLeft,boundTop,boundRight,boundBottom);
 docRef.crop(bounds);
}

// Image's aspect ratio is less than the desired ratio
// so crop out top and bottom areas of the Image
if ((docRef.width / docRef.height) < (WidthRatio/ HeightRatio))
{
 boundTop = ((docRef.height - (docRef.width * (HeightRatio/WidthRatio))) / 2);
 boundLeft = 0;
 boundBottom = ((docRef.height + (docRef.width * (HeightRatio/WidthRatio))) / 2);
 boundRight = docRef.width;
 bounds = new Array(boundLeft,boundTop,boundRight,boundBottom);
 docRef.crop(bounds);
}

// bounds = new Array(10, 10, app.activeDocument.width - 10, app.activeDocument.height - 10);
// docRef.crop(bounds);

 boundTop = null;
 boundLeft = null;
 boundRight = null;
 boundBottom = null;
 WidthRatio = null;
 HeightRatio = null;
 //docRef = null;

}
    
// =======================================================
//  Fin du script de recadrage
// =======================================================

//Création d'une référence au document actif
 var docRef = app.activeDocument;

// Aplatissement des calques
docRef.flatten();

// //Transformation du fond en calque nommé "Original picture"
docRef.activeLayer.isBackgroundLayer = false;
docRef.activeLayer.name = "Original picture";

// =======================================================
// Création du calque pour le filtre
// =======================================================
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Filter";

// =======================================================
// Création du calque de vignettage
// =======================================================
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Vignette";

// =======================================================
// Création du calque de texture
// =======================================================
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Texture";

// =======================================================
// Création du calque de bordure
// =======================================================
var layerBackground = docRef.artLayers.add();
layerBackground.name = "Frame";

// =======================================================
//  Déplacement des calques dans le groupe de calques " Analog Photo FX"
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc36 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref37 = new ActionReference();
        var idlayerSection = stringIDToTypeID( "layerSection" );
        ref37.putClass( idlayerSection );
    desc36.putReference( idnull, ref37 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc37 = new ActionDescriptor();
        var idNm = charIDToTypeID( "Nm  " );
        desc37.putString( idNm, "Analog Photo FX" );
        var idClr = charIDToTypeID( "Clr " );
        var idClr = charIDToTypeID( "Clr " );
        var idOrng = charIDToTypeID( "Orng" );
        desc37.putEnumerated( idClr, idClr, idOrng );
    var idlayerSection = stringIDToTypeID( "layerSection" );
    desc36.putObject( idUsng, idlayerSection, desc37 );
executeAction( idMk, desc36, DialogModes.NO );

var idslct = charIDToTypeID( "slct" );
    var desc38 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref38 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref38.putName( idLyr, "Frame" );
    desc38.putReference( idnull, ref38 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc38.putBoolean( idMkVs, false );
executeAction( idslct, desc38, DialogModes.NO );

var idslct = charIDToTypeID( "slct" );
    var desc39 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref39 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref39.putName( idLyr, "Filter" );
    desc39.putReference( idnull, ref39 );
    var idselectionModifier = stringIDToTypeID( "selectionModifier" );
    var idselectionModifierType = stringIDToTypeID( "selectionModifierType" );
    var idaddToSelectionContinuous = stringIDToTypeID( "addToSelectionContinuous" );
    desc39.putEnumerated( idselectionModifier, idselectionModifierType, idaddToSelectionContinuous );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc39.putBoolean( idMkVs, false );
executeAction( idslct, desc39, DialogModes.NO );

var idmove = charIDToTypeID( "move" );
    var desc40 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref40 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref40.putEnumerated( idLyr, idOrdn, idTrgt );
    desc40.putReference( idnull, ref40 );
    var idT = charIDToTypeID( "T   " );
        var ref41 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref41.putIndex( idLyr, 6 );
    desc40.putReference( idT, ref41 );
    var idAdjs = charIDToTypeID( "Adjs" );
    desc40.putBoolean( idAdjs, false );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc40.putInteger( idVrsn, 5 );
executeAction( idmove, desc40, DialogModes.NO );
    
// =======================================================
// Ouverture d'un filtre
// =======================================================
var strAnalogFXFolder = new Folder(inPanelLocation + "/assets/filters/"); 
var analogFiles = strAnalogFXFolder.getFiles (/.jpg|.jpeg|.jpe|.png/i)
var randomNumber = randomInt(0,analogFiles.length-1);
app.open(analogFiles[randomNumber]);
function randomInt(min, max) {
    if (! isFinite (min)) min = 0;
    if (! isFinite (max)) max = 1;
    return (Math.floor ((Math.random () % 1) * (max - min + 1) + min));
    }
    
    //Création d'une référence au document actif
var FilterDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
FilterDoc .activeLayer.isBackgroundLayer = false;
FilterDoc .activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
FilterDoc .resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
FilterDoc .activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
FilterDoc .close(SaveOptions.DONOTSAVECHANGES);

// =======================================================
//Sélection du calque "Filter" 
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc30 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref24 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref24.putName( idLyr, "Filter" );
    desc30.putReference( idnull, ref24 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc30.putBoolean( idMkVs, false );
executeAction( idslct, desc30, DialogModes.NO );

// =======================================================
// Collage du presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// =======================================================
//Change le mode d'incrustation en "Soft Light"
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc32 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref25 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref25.putEnumerated( idLyr, idOrdn, idTrgt );
    desc32.putReference( idnull, ref25 );
    var idT = charIDToTypeID( "T   " );
        var desc33 = new ActionDescriptor();
        var idMd = charIDToTypeID( "Md  " );
        var idBlnM = charIDToTypeID( "BlnM" );
        var idSftL = charIDToTypeID( "SftL" );
        desc33.putEnumerated( idMd, idBlnM, idSftL );
    var idLyr = charIDToTypeID( "Lyr " );
    desc32.putObject( idT, idLyr, desc33 );
executeAction( idsetd, desc32, DialogModes.NO );

// =======================================================
//Opacité du calque à 60%
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc8 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref4.putEnumerated( idLyr, idOrdn, idTrgt );
    desc8.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
        var desc9 = new ActionDescriptor();
        var idOpct = charIDToTypeID( "Opct" );
        var idPrc = charIDToTypeID( "#Prc" );
        desc9.putUnitDouble( idOpct, idPrc, 60.000000 );
    var idLyr = charIDToTypeID( "Lyr " );
    desc8.putObject( idT, idLyr, desc9 );
executeAction( idsetd, desc8, DialogModes.NO );

// =======================================================
// Ouverture d'une vignette
// =======================================================
var strAnalogFXFolder = new Folder(inPanelLocation + "/assets/vignettes/"); 
var analogFiles = strAnalogFXFolder.getFiles (/.jpg|.jpeg|.jpe|.png/i)
var randomNumber = randomInt(0,analogFiles.length-1);
app.open(analogFiles[randomNumber]);
function randomInt(min, max) {
    if (! isFinite (min)) min = 0;
    if (! isFinite (max)) max = 1;
    return (Math.floor ((Math.random () % 1) * (max - min + 1) + min));
    }

//Création d'une référence au document actif
var vignetteDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
vignetteDoc.activeLayer.isBackgroundLayer = false;
vignetteDoc.activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
vignetteDoc.resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
vignetteDoc.activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
vignetteDoc.close(SaveOptions.DONOTSAVECHANGES);

// =======================================================
//Selection du calque "Vignette" 
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc30 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref24 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref24.putName( idLyr, "Vignette" );
    desc30.putReference( idnull, ref24 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc30.putBoolean( idMkVs, false );
executeAction( idslct, desc30, DialogModes.NO );

// =======================================================
// Collage du presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// =======================================================
//Calque en mode "Overlay"
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref2.putEnumerated( idLyr, idOrdn, idTrgt );
    desc3.putReference( idnull, ref2 );
    var idT = charIDToTypeID( "T   " );
        var desc4 = new ActionDescriptor();
        var idMd = charIDToTypeID( "Md  " );
        var idBlnM = charIDToTypeID( "BlnM" );
        var idOvrl = charIDToTypeID( "Ovrl" );
        desc4.putEnumerated( idMd, idBlnM, idOvrl );
    var idLyr = charIDToTypeID( "Lyr " );
    desc3.putObject( idT, idLyr, desc4 );
executeAction( idsetd, desc3, DialogModes.NO );

// =======================================================
// Ouverture d'une texture
// =======================================================
var strAnalogFXFolder = new Folder(inPanelLocation + "/assets/textures/"); 
var analogFiles = strAnalogFXFolder.getFiles (/.jpg|.jpeg|.jpe|.png/i)
var randomNumber = randomInt(0,analogFiles.length-1);
app.open(analogFiles[randomNumber]);
function randomInt(min, max) {
    if (! isFinite (min)) min = 0;
    if (! isFinite (max)) max = 1;
    return (Math.floor ((Math.random () % 1) * (max - min + 1) + min));
    }

//Création d'une référence au document actif
var textureDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
textureDoc.activeLayer.isBackgroundLayer = false;
textureDoc.activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
textureDoc.resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
textureDoc.activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
textureDoc.close(SaveOptions.DONOTSAVECHANGES);

// =======================================================
//Sélection du calque "Texture" 
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc30 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref24 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref24.putName( idLyr, "Texture" );
    desc30.putReference( idnull, ref24 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc30.putBoolean( idMkVs, false );
executeAction( idslct, desc30, DialogModes.NO );

// =======================================================
// Collage du presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// =======================================================
//Calque en mode "Screen"
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc45 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref35 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref35.putEnumerated( idLyr, idOrdn, idTrgt );
    desc45.putReference( idnull, ref35 );
    var idT = charIDToTypeID( "T   " );
        var desc46 = new ActionDescriptor();
        var idMd = charIDToTypeID( "Md  " );
        var idBlnM = charIDToTypeID( "BlnM" );
        var idScrn = charIDToTypeID( "Scrn" );
        desc46.putEnumerated( idMd, idBlnM, idScrn );
    var idLyr = charIDToTypeID( "Lyr " );
    desc45.putObject( idT, idLyr, desc46 );
executeAction( idsetd, desc45, DialogModes.NO );

// =======================================================
//Opacité du calque à 75%
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc8 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref4.putEnumerated( idLyr, idOrdn, idTrgt );
    desc8.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
        var desc9 = new ActionDescriptor();
        var idOpct = charIDToTypeID( "Opct" );
        var idPrc = charIDToTypeID( "#Prc" );
        desc9.putUnitDouble( idOpct, idPrc, 75.000000 );
    var idLyr = charIDToTypeID( "Lyr " );
    desc8.putObject( idT, idLyr, desc9 );
executeAction( idsetd, desc8, DialogModes.NO );

// =======================================================
// Ouverture d'une bordure
// =======================================================
var strAnalogFXFolder = new Folder(inPanelLocation + "/assets/frames/"); 
var analogFiles = strAnalogFXFolder.getFiles (/.jpg|.jpeg|.jpe|.png/i)
var randomNumber = randomInt(0,analogFiles.length-1);
app.open(analogFiles[randomNumber]);
function randomInt(min, max) {
    if (! isFinite (min)) min = 0;
    if (! isFinite (max)) max = 1;
    return (Math.floor ((Math.random () % 1) * (max - min + 1) + min));
    }

//Création d'une référence au document actif
var edgeDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
edgeDoc.activeLayer.isBackgroundLayer = false;
edgeDoc.activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
edgeDoc.resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
edgeDoc.activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
edgeDoc.close(SaveOptions.DONOTSAVECHANGES);

// =======================================================
//Sélection du calque "Frame" 
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc30 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref24 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref24.putName( idLyr, "Frame" );
    desc30.putReference( idnull, ref24 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc30.putBoolean( idMkVs, false );
executeAction( idslct, desc30, DialogModes.NO );

// =======================================================
// Collage du presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// =======================================================
// Création d'un instantané
// =======================================================
var id3 = charIDToTypeID( "Mk  " );
    var desc2 = new ActionDescriptor();
    var id4 = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var id5 = charIDToTypeID( "SnpS" );
        ref1.putClass( id5 );
    desc2.putReference( id4, ref1 );
    var id6 = charIDToTypeID( "From" );
        var ref2 = new ActionReference();
        var id7 = charIDToTypeID( "HstS" );
        var id8 = charIDToTypeID( "CrnH" );
        ref2.putProperty( id7, id8 );
    desc2.putReference( id6, ref2 );
executeAction( id3, desc2, DialogModes.NO );

// =======================================================
// Fin du script
// =======================================================
}

function undo(){
    
var docRef = app.activeDocument;docRef.activeHistoryState = docRef.historyStates[0];
    
}

function darkRainbow(inPanelLocation){
    //  Paramétrage de Adobe(r) Photoshop(r) CS5 tpour utiliser l'unité en pixels
var startRulerUnits = app.preferences.rulerUnits 
var startTypeUnits = app.preferences.typeUnits 

app.preferences.rulerUnits = Units.PIXELS 
app.preferences.typeUnits = TypeUnits.PIXELS 

// =======================================================
//retour à l'image initiale
// =======================================================
var docRef = app.activeDocument;docRef.activeHistoryState = docRef.historyStates[0];

// =======================================================
//Accès aux paramètres du "Preset"
// =======================================================

var strEdgeFXFolder =  new Folder(inPanelLocation + "/presets/dark_rainbow.jsx");

$.evalFile(strEdgeFXFolder);

// =======================================================
// déroulement de la suite du script
// =======================================================

// =======================================================
// Affiche une alerte si aucun document n'est ouvert
// =======================================================
if ( app.documents.length <= 0 ) {alert("You must open a document!");}

// =======================================================
//  Recadrage du document en carré
// =======================================================
if (app.documents.length > 0) {    

 var docRef = app.activeDocument;
 var WidthRatio = 1;
 var HeightRatio = 1;
 var boundTop;
 var boundLeft;
 var boundRight;
 var boundBottom;

// Image's aspect ratio is greater than the desired ratio
// so crop out left and right areas of the Image
if ((docRef.width / docRef.height) > (WidthRatio/ HeightRatio))
{
 boundTop = 0;
 boundLeft = ((docRef.width - (docRef.height * (WidthRatio/HeightRatio))) / 2);
 boundBottom = docRef.height;
 boundRight = ((docRef.width + (docRef.height * (WidthRatio/HeightRatio))) / 2);
 bounds = new Array(boundLeft,boundTop,boundRight,boundBottom);
 docRef.crop(bounds);
}

// Image's aspect ratio is less than the desired ratio
// so crop out top and bottom areas of the Image
if ((docRef.width / docRef.height) < (WidthRatio/ HeightRatio))
{
 boundTop = ((docRef.height - (docRef.width * (HeightRatio/WidthRatio))) / 2);
 boundLeft = 0;
 boundBottom = ((docRef.height + (docRef.width * (HeightRatio/WidthRatio))) / 2);
 boundRight = docRef.width;
 bounds = new Array(boundLeft,boundTop,boundRight,boundBottom);
 docRef.crop(bounds);
}

// bounds = new Array(10, 10, app.activeDocument.width - 10, app.activeDocument.height - 10);
// docRef.crop(bounds);

 boundTop = null;
 boundLeft = null;
 boundRight = null;
 boundBottom = null;
 WidthRatio = null;
 HeightRatio = null;
 //docRef = null;

}


// =======================================================
//  Fin du script de recadrage
// =======================================================

//Création d'une référence au document actif
 var docRef = app.activeDocument;

// Aplatissement des calques
docRef.flatten();

// //Transformation du fond en calque nommé "Original picture"
docRef.activeLayer.isBackgroundLayer = false;
docRef.activeLayer.name = "Original picture";

var filterLayer = docRef.artLayers.add();
filterLayer .name = "Filter";
filterLayer.blendMode = FilterBlendMode;
filterLayer.opacity = FilterLayerOpacity;

var vignetteLayer = docRef.artLayers.add();
vignetteLayer.name = "Vignette";
vignetteLayer.blendMode = VignetteBlendMode;
vignetteLayer.opacity = VignetteLayerOpacity;

var textureLayer = docRef.artLayers.add();
textureLayer.name = "Texture";
textureLayer.blendMode = TextureBlendMode;
textureLayer.opacity = TextureLayerOpacity;

var frameLayer = docRef.artLayers.add();
frameLayer.name = "Frame";
frameLayer.blendMode = FrameBlendMode;
frameLayer.opacity = FrameLayerOpacity;

// =======================================================
//  Déplacement des calques dans le groupe de calques " Analog Photo FX"
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc36 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref37 = new ActionReference();
        var idlayerSection = stringIDToTypeID( "layerSection" );
        ref37.putClass( idlayerSection );
    desc36.putReference( idnull, ref37 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc37 = new ActionDescriptor();
        var idNm = charIDToTypeID( "Nm  " );
        desc37.putString( idNm, "Analog Photo FX" );
        var idClr = charIDToTypeID( "Clr " );
        var idClr = charIDToTypeID( "Clr " );
        var idOrng = charIDToTypeID( "Orng" );
        desc37.putEnumerated( idClr, idClr, idOrng );
    var idlayerSection = stringIDToTypeID( "layerSection" );
    desc36.putObject( idUsng, idlayerSection, desc37 );
executeAction( idMk, desc36, DialogModes.NO );

var idslct = charIDToTypeID( "slct" );
    var desc38 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref38 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref38.putName( idLyr, "Frame" );
    desc38.putReference( idnull, ref38 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc38.putBoolean( idMkVs, false );
executeAction( idslct, desc38, DialogModes.NO );

var idslct = charIDToTypeID( "slct" );
    var desc39 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref39 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref39.putName( idLyr, "Filter" );
    desc39.putReference( idnull, ref39 );
    var idselectionModifier = stringIDToTypeID( "selectionModifier" );
    var idselectionModifierType = stringIDToTypeID( "selectionModifierType" );
    var idaddToSelectionContinuous = stringIDToTypeID( "addToSelectionContinuous" );
    desc39.putEnumerated( idselectionModifier, idselectionModifierType, idaddToSelectionContinuous );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc39.putBoolean( idMkVs, false );
executeAction( idslct, desc39, DialogModes.NO );

var idmove = charIDToTypeID( "move" );
    var desc40 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref40 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref40.putEnumerated( idLyr, idOrdn, idTrgt );
    desc40.putReference( idnull, ref40 );
    var idT = charIDToTypeID( "T   " );
        var ref41 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref41.putIndex( idLyr, 6 );
    desc40.putReference( idT, ref41 );
    var idAdjs = charIDToTypeID( "Adjs" );
    desc40.putBoolean( idAdjs, false );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc40.putInteger( idVrsn, 5 );
executeAction( idmove, desc40, DialogModes.NO );


// Ouverture d'un filtre coloré
var strEdgeFXFolder = new Folder(inPanelLocation + "/assets/filters/" + FilterFileName); 
open (strEdgeFXFolder)

//Création d'une référence au document actif
var FilterDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
FilterDoc .activeLayer.isBackgroundLayer = false;
FilterDoc .activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
FilterDoc .resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
FilterDoc .activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
FilterDoc .close(SaveOptions.DONOTSAVECHANGES);

//Séction du calque "Coloured filter" 
// =======================================================
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref1.putName( idLyr, "Filter" );
    desc4.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc4.putBoolean( idMkVs, false );
executeAction( idslct, desc4, DialogModes.NO );



//on vide le calque
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc188 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref96 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref96.putProperty( idChnl, idfsel );
    desc188.putReference( idnull, ref96 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idAl = charIDToTypeID( "Al  " );
    desc188.putEnumerated( idT, idOrdn, idAl );
executeAction( idsetd, desc188, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
executeAction( idDlt, undefined, DialogModes.NO );

// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc189 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref97 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref97.putProperty( idChnl, idfsel );
    desc189.putReference( idnull, ref97 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc189.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc189, DialogModes.NO );

// Colle le presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// Ouverture de la vignette
var strEdgeFXFolder = new Folder(inPanelLocation + "/assets/vignettes/" + VignetteFileName); 
open (strEdgeFXFolder)

//Création d'une référence au document actif
var FilterDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
FilterDoc .activeLayer.isBackgroundLayer = false;
FilterDoc .activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
FilterDoc .resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
FilterDoc .activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
FilterDoc .close(SaveOptions.DONOTSAVECHANGES);

//Séction du calque "Coloured filter" 
// =======================================================
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref1.putName( idLyr, "Vignette" );
    desc4.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc4.putBoolean( idMkVs, false );
executeAction( idslct, desc4, DialogModes.NO );

//on vide le calque
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc188 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref96 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref96.putProperty( idChnl, idfsel );
    desc188.putReference( idnull, ref96 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idAl = charIDToTypeID( "Al  " );
    desc188.putEnumerated( idT, idOrdn, idAl );
executeAction( idsetd, desc188, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
executeAction( idDlt, undefined, DialogModes.NO );

// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc189 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref97 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref97.putProperty( idChnl, idfsel );
    desc189.putReference( idnull, ref97 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc189.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc189, DialogModes.NO );

// Colle le presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// Ouverture de la texture
var strEdgeFXFolder = new Folder(inPanelLocation + "/assets/textures/" + TextureFileName); 
open (strEdgeFXFolder )

//Création d'une référence au document actif
var FilterDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
FilterDoc .activeLayer.isBackgroundLayer = false;
FilterDoc .activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
FilterDoc .resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
FilterDoc .activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
FilterDoc .close(SaveOptions.DONOTSAVECHANGES);

//Sélection du calque "Texture" 
// =======================================================
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref1.putName( idLyr, "Texture" );
    desc4.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc4.putBoolean( idMkVs, false );
executeAction( idslct, desc4, DialogModes.NO );

//on vide le calque
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc188 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref96 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref96.putProperty( idChnl, idfsel );
    desc188.putReference( idnull, ref96 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idAl = charIDToTypeID( "Al  " );
    desc188.putEnumerated( idT, idOrdn, idAl );
executeAction( idsetd, desc188, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
executeAction( idDlt, undefined, DialogModes.NO );

// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc189 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref97 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref97.putProperty( idChnl, idfsel );
    desc189.putReference( idnull, ref97 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc189.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc189, DialogModes.NO );

// Colle le presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// Ouverture de la bordure
var strEdgeFXFolder = new Folder(inPanelLocation + "/assets/frames/" + FrameFileName); 
open (strEdgeFXFolder)

//Création d'une référence au document actif
var FilterDoc = app.activeDocument;

//Transformation du fond en calque nommé "Temp"
FilterDoc .activeLayer.isBackgroundLayer = false;
FilterDoc .activeLayer.name = "Temp";
		
// Redimenssionnement du calque "Temp"  à la taille du document de travail
FilterDoc .resizeImage (docRef.width, docRef.height);

// Copie du calque "Temp"
FilterDoc .activeLayer.copy();

// Fermeture du calque "Temp" sans sauvegarde
FilterDoc .close(SaveOptions.DONOTSAVECHANGES);

//Séction du calque "Frame" 
// =======================================================
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref1.putName( idLyr, "Frame" );
    desc4.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc4.putBoolean( idMkVs, false );
executeAction( idslct, desc4, DialogModes.NO );

//on vide le calque
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc188 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref96 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref96.putProperty( idChnl, idfsel );
    desc188.putReference( idnull, ref96 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idAl = charIDToTypeID( "Al  " );
    desc188.putEnumerated( idT, idOrdn, idAl );
executeAction( idsetd, desc188, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
executeAction( idDlt, undefined, DialogModes.NO );

// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc189 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref97 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref97.putProperty( idChnl, idfsel );
    desc189.putReference( idnull, ref97 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc189.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc189, DialogModes.NO );

// Colle le presse-papier dans le calque
// =======================================================
var idpast = charIDToTypeID( "past" );
    var desc31 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc31.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc31, DialogModes.NO );

// =======================================================
// Création d'un instantané
// =======================================================
var id3 = charIDToTypeID( "Mk  " );
    var desc2 = new ActionDescriptor();
    var id4 = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var id5 = charIDToTypeID( "SnpS" );
        ref1.putClass( id5 );
    desc2.putReference( id4, ref1 );
    var id6 = charIDToTypeID( "From" );
        var ref2 = new ActionReference();
        var id7 = charIDToTypeID( "HstS" );
        var id8 = charIDToTypeID( "CrnH" );
        ref2.putProperty( id7, id8 );
    desc2.putReference( id6, ref2 );
executeAction( id3, desc2, DialogModes.NO );

// =======================================================
// Fin du script
// =======================================================
    
}