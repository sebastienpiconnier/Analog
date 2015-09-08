//===================================================
// Preset information
//===================================================
/* 
Preset name : Marshall
Author : Sebastien PICONNIER
E-mail : sebastien.piconnier@gmail.com
Website : http://www.myphotoshopeffects.com
Copyright 2011 Sebastien Piconnier
Notes :     use this preset with the Analog Photo FX® extension for Adobe® Photoshop® CS5 available on http://www.myphotoshopeffects.com/.
                See the Analog Photo FX® user guide to create your own preset.
*/
    
//===================================================
// Filter Layer parameters
//===================================================
var FilterFileName = "sepia.png";
var FilterBlendMode = BlendMode.SOFTLIGHT;
var FilterLayerOpacity = 100;

//===================================================
// Vignette Layer parameters
//===================================================
var VignetteFileName = "vignette1.png";
var VignetteBlendMode = BlendMode.OVERLAY;
var VignetteLayerOpacity = 100;

//===================================================
// Texture layer parameters
//===================================================
var TextureFileName = "boreal_texture.jpg";
var TextureBlendMode = BlendMode.SCREEN;
var TextureLayerOpacity = 75;

//===================================================
// Frame layer parameters
//===================================================
var FrameFileName = "bw_grunge_frame.png";
var FrameBlendMode = BlendMode.NORMAL;
var FrameLayerOpacity = 100;

//===================================================
// Options : add a Black & White adjustment layer
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idAdjL = charIDToTypeID( "AdjL" );
        ref3.putClass( idAdjL );
    desc7.putReference( idnull, ref3 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc8 = new ActionDescriptor();
        var idClr = charIDToTypeID( "Clr " );
        var idClr = charIDToTypeID( "Clr " );
        var idOrng = charIDToTypeID( "Orng" );
        desc8.putEnumerated( idClr, idClr, idOrng );
        var idType = charIDToTypeID( "Type" );
            var desc9 = new ActionDescriptor();
            var idpresetKind = stringIDToTypeID( "presetKind" );
            var idpresetKindType = stringIDToTypeID( "presetKindType" );
            var idpresetKindDefault = stringIDToTypeID( "presetKindDefault" );
            desc9.putEnumerated( idpresetKind, idpresetKindType, idpresetKindDefault );
            var idRd = charIDToTypeID( "Rd  " );
            desc9.putInteger( idRd, 40 );
            var idYllw = charIDToTypeID( "Yllw" );
            desc9.putInteger( idYllw, 60 );
            var idGrn = charIDToTypeID( "Grn " );
            desc9.putInteger( idGrn, 40 );
            var idCyn = charIDToTypeID( "Cyn " );
            desc9.putInteger( idCyn, 60 );
            var idBl = charIDToTypeID( "Bl  " );
            desc9.putInteger( idBl, 20 );
            var idMgnt = charIDToTypeID( "Mgnt" );
            desc9.putInteger( idMgnt, 80 );
            var iduseTint = stringIDToTypeID( "useTint" );
            desc9.putBoolean( iduseTint, false );
            var idtintColor = stringIDToTypeID( "tintColor" );
                var desc10 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc10.putDouble( idRd, 225.000458 );
                var idGrn = charIDToTypeID( "Grn " );
                desc10.putDouble( idGrn, 211.000671 );
                var idBl = charIDToTypeID( "Bl  " );
                desc10.putDouble( idBl, 179.001160 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc9.putObject( idtintColor, idRGBC, desc10 );
        var idBanW = charIDToTypeID( "BanW" );
        desc8.putObject( idType, idBanW, desc9 );
    var idAdjL = charIDToTypeID( "AdjL" );
    desc7.putObject( idUsng, idAdjL, desc8 );
executeAction( idMk, desc7, DialogModes.NO );

// =======================================================
var idmove = charIDToTypeID( "move" );
    var desc11 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref4.putEnumerated( idLyr, idOrdn, idTrgt );
    desc11.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
        var ref5 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref5.putIndex( idLyr, 2 );
    desc11.putReference( idT, ref5 );
    var idAdjs = charIDToTypeID( "Adjs" );
    desc11.putBoolean( idAdjs, false );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc11.putInteger( idVrsn, 5 );
executeAction( idmove, desc11, DialogModes.NO );

// =======================================================