require("dotenv").config()

module.exports = {
    // Type : WATCHING, LISTENING, STREAMING, PLAYING
    TYPE : "PLAYING",
    
    // Link Gambar (PNG,JPG,GIF) berasal dari google, tenor, giphy atau discord
    LARGE_IMAGE : "https://c.tenor.com/e3bsEGJ6NoMAAAAC/tenor.gif",
    SMALL_IMAGE : "https://c.tenor.com/TgKK6YKNkm0AAAAi/verified-verificado.gif",
    LARGE_TEXT : "Berlian Bang",
    SMALL_TEXT : "Verified",

    ACTIVITY: {
        TYPE: {
            LISTENING : {
                // NAME : Text yang berada Di samping Listening to
                // Details : Text yang berada di bawah Listening to
                
                NAME : "",
                DETAILS : "",
            },
            WATCHING: {
                // Name : Text yang berada di samping WATCHING
                // Details : Text yang berada di bawah Listening to 
                
                NAME : "",
                DETAILS : "",
            },
            STREAMING: {
                // Details : Text yang berada di bawah Live on Twitch
                
                NAME : "",
                DETAILS : "|",
            },
            PLAYING: {
                // NAME : Text Judul atau Paling atas
                // DETAILS : Text yang berada di bawah NAME
                // STATE : Text yang berada di bawah Details
                // LARGE_TEXT : Text yang berada pada Large Image
                // SMALL_TEXT : Text yang berada pada Small Image
                // Jika TIME : true (Timelapse aktif), TIME : false (Timelapse nonaktif)

                NAME : "",
                DETAILS : "Vash",
                STATE : "Turu",
                TIME : true,
            }
        },
    },
    // Button Atas
    BUTTON_1: {
        // BUTTON_TEXT : Text pada button/tombol
        // BUTTON_LINK : Membuka Link jika menekan tombol
        BUTTON_TEXT : "Join Discord",
        BUTTON_LINK : "",
    },
    // Button Bawah
    BUTTON_2: {
        // BUTTON_TEXT : Text pada button/tombol
        // BUTTON_LINK : Membuka Link jika menekan tombol
        BUTTON_TEXT : "Github",
        BUTTON_LINK : "https://github.com/Fush1ren",
    },

    CLIENT : {
        TOKEN : process.env.TOKEN,
        APP_ID : process.env.APPLICATION_ID,
    }
}