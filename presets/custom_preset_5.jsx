//===================================================
// Preset information
//===================================================
/* 
Preset name : Custom Preset 5
Author : Your Name here
E-mail : youremail@domain.com
Website : http://www.yourwebsite.com
Copyright 2011 Your Name
Notes :     use this preset with the Analog Photo FX® extension for Adobe® Photoshop® CS5 available on http://www.myphotoshopeffects.com/.
                See the Analog Photo FX® user guide to create your own preset.
*/
 
//===================================================
//Begin of the part to delete : display an alert
//===================================================
alert("This is an example of preset to customize. See the documentation to create your own preset. Click OK to continue.");
//===================================================
// End of the part to delete
//===================================================

//===================================================
// Begin of the part to modify
//===================================================
    // Filter Layer parameters
    var FilterFileName = "dark_rainbow.jpg";
    var FilterBlendMode = BlendMode.SOFTLIGHT;
    var FilterLayerOpacity = 75;

    // Vignette Layer parameters
    var VignetteFileName = "vignette3.png";
    var VignetteBlendMode = BlendMode.OVERLAY;
    var VignetteLayerOpacity = 100;

    // Texture layer parameters
    var TextureFileName = "dust_scratches.jpg";
    var TextureBlendMode = BlendMode.SCREEN;
    var TextureLayerOpacity = 65;

    // Frame layer parameters
    var FrameFileName = "squared_corners_polaroid.png";
    var FrameBlendMode = BlendMode.NORMAL;
    var FrameLayerOpacity = 100;

//===================================================
// End of the part to modify
//===================================================