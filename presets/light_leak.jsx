//===================================================
// Preset information
//===================================================
/* 
Preset name : Light Leak
Author : Sebastien Piconnier
E-mail : sebastien.piconnier@gmail.com
Website : http://www.myphotoshopeffects.com
Copyright 2013 Sebastien Piconnier
Notes :     use this preset with the Analog Photo FX® extension for Adobe® Photoshop® CS5, cS6 and CC available on http://www.myphotoshopeffects.com/ and Adobe Creative Cloud
                See the Analog Photo FX® user guide to create your own preset.
*/
 
//===================================================
//Begin of the part to delete : display an alert
//===================================================
//alert("This is an example of preset to customize. See the documentation to create your own preset. Click OK to continue.");
//===================================================
// End of the part to delete
//===================================================

//===================================================
// Begin of the part to modify
//===================================================
    // Filter Layer parameters
    var FilterFileName = "light_leak.jpg";
    var FilterBlendMode = BlendMode.LIGHTEN;
    var FilterLayerOpacity = 80;

    // Vignette Layer parameters
    var VignetteFileName = "vignette1.png";
    var VignetteBlendMode = BlendMode.OVERLAY;
    var VignetteLayerOpacity = 100;

    // Texture layer parameters
    var TextureFileName = "boreal_texture.jpg";
    var TextureBlendMode = BlendMode.SCREEN;
    var TextureLayerOpacity = 75;

    // Frame layer parameters
    var FrameFileName = "black_border.png";
    var FrameBlendMode = BlendMode.NORMAL;
    var FrameLayerOpacity = 100;

//===================================================
// End of the part to modify
//===================================================