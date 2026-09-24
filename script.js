// ======================================================
// FONT GENERATOR
// ======================================================

// ======================================================
// GET HTML ELEMENTS
// ======================================================

const textInput =
document.getElementById("textInput");

const fontList =
document.getElementById("fontList");

const searchInput =
document.getElementById("searchInput");

const noResults =
document.getElementById("noResults");

// ======================================================
// SELECTED TEXT COLOR
// ======================================================

let selectedColor = "#000000";

// ======================================================
// UNICODE CONVERTER
// ======================================================

function unicodeFont(text, upperStart, lowerStart) {

return [...text].map(char => {  

    const code = char.charCodeAt(0);  

    if (code >= 65 && code <= 90) {  

        return String.fromCodePoint(  
            upperStart + code - 65  
        );  

    }  

    if (code >= 97 && code <= 122) {  

        return String.fromCodePoint(  
            lowerStart + code - 97  
        );  

    }  

    return char;  

}).join("");

}

// ======================================================
// FONT FUNCTIONS
// ======================================================

function bold(text) {
return unicodeFont(text, 0x1D400, 0x1D41A);
}

function italic(text) {
return unicodeFont(text, 0x1D434, 0x1D44E);
}

function boldItalic(text) {
return unicodeFont(text, 0x1D468, 0x1D482);
}

function monospace(text) {
return unicodeFont(text, 0x1D670, 0x1D68A);
}

function sans(text) {
return unicodeFont(text, 0x1D5A0, 0x1D5BA);
}

function sansBold(text) {
return unicodeFont(text, 0x1D5D4, 0x1D5EE);
}

function sansItalic(text) {
return unicodeFont(text, 0x1D608, 0x1D622);
}

function sansBoldItalic(text) {
return unicodeFont(text, 0x1D63C, 0x1D656);
}

function fraktur(text) {

const map = {  

    A:"𝔄",  
    B:"𝔅",  
    C:"ℭ",  
    D:"𝔇",  
    E:"𝔈",  
    F:"𝔉",  
    G:"𝔊",  
    H:"ℌ",  
    I:"ℑ",  
    J:"𝔍",  
    K:"𝔎",  
    L:"𝔏",  
    M:"𝔐",  
    N:"𝔑",  
    O:"𝔒",  
    P:"𝔓",  
    Q:"𝔔",  
    R:"ℜ",  
    S:"𝔖",  
    T:"𝔗",  
    U:"𝔘",  
    V:"𝔙",  
    W:"𝔚",  
    X:"𝔛",  
    Y:"𝔜",  
    Z:"ℨ",  

    a:"𝔞",  
    b:"𝔟",  
    c:"𝔠",  
    d:"𝔡",  
    e:"𝔢",  
    f:"𝔣",  
    g:"𝔤",  
    h:"𝔥",  
    i:"𝔦",  
    j:"𝔧",  
    k:"𝔨",  
    l:"𝔩",  
    m:"𝔪",  
    n:"𝔫",  
    o:"𝔬",  
    p:"𝔭",  
    q:"𝔮",  
    r:"𝔯",  
    s:"𝔰",  
    t:"𝔱",  
    u:"𝔲",  
    v:"𝔳",  
    w:"𝔴",  
    x:"𝔵",  
    y:"𝔶",  
    z:"𝔷"  

};  

return [...text]  
    .map(char => map[char] || char)  
    .join("");

}

function boldFraktur(text) {

return unicodeFont(  
    text,  
    0x1D56C,  
    0x1D586  
);

}

function doubleStruck(text) {

const map = {  

    A:"𝔸",  
    B:"𝔹",  
    C:"ℂ",  
    D:"𝔻",  
    E:"𝔼",  
    F:"𝔽",  
    G:"𝔾",  
    H:"ℍ",  
    I:"𝕀",  
    J:"𝕁",  
    K:"𝕂",  
    L:"𝕃",  
    M:"𝕄",  
    N:"ℕ",  
    O:"𝕆",  
    P:"ℙ",  
    Q:"ℚ",  
    R:"ℝ",  
    S:"𝕊",  
    T:"𝕋",  
    U:"𝕌",  
    V:"𝕍",  
    W:"𝕎",  
    X:"𝕏",  
    Y:"𝕐",  
    Z:"ℤ",  

    a:"𝕒",  
    b:"𝕓",  
    c:"𝕔",  
    d:"𝕕",  
    e:"𝕖",  
    f:"𝕗",  
    g:"𝕘",  
    h:"𝕙",  
    i:"𝕚",  
    j:"𝕛",  
    k:"𝕜",  
    l:"𝕝",  
    m:"𝕞",  
    n:"𝕟",  
    o:"𝕠",  
    p:"𝕡",  
    q:"𝕢",  
    r:"𝕣",  
    s:"𝕤",  
    t:"𝕥",  
    u:"𝕦",  
    v:"𝕧",  
    w:"𝕨",  
    x:"𝕩",  
    y:"𝕪",  
    z:"𝕫"  

};  

return [...text]  
    .map(char => map[char] || char)  
    .join("");

}

function script(text) {

const map = {  

    A:"𝒜",  
    B:"ℬ",  
    C:"𝒞",  
    D:"𝒟",  
    E:"ℰ",  
    F:"ℱ",  
    G:"𝒢",  
    H:"ℋ",  
    I:"ℐ",  
    J:"𝒥",  
    K:"𝒦",  
    L:"ℒ",  
    M:"ℳ",  
    N:"𝒩",  
    O:"𝒪",  
    P:"𝒫",  
    Q:"𝒬",  
    R:"ℛ",  
    S:"𝒮",  
    T:"𝒯",  
    U:"𝒰",  
    V:"𝒱",  
    W:"𝒲",  
    X:"𝒳",  
    Y:"𝒴",  
    Z:"𝒵",  

    a:"𝒶",  
    b:"𝒷",  
    c:"𝒸",  
    d:"𝒹",  
    e:"ℯ",  
    f:"𝒻",  
    g:"ℊ",  
    h:"𝒽",  
    i:"𝒾",  
    j:"𝒿",  
    k:"𝓀",  
    l:"𝓁",  
    m:"𝓂",  
    n:"𝓃",  
    o:"ℴ",  
    p:"𝓅",  
    q:"𝓆",  
    r:"𝓇",  
    s:"𝓈",  
    t:"𝓉",  
    u:"𝓊",  
    v:"𝓋",  
    w:"𝓌",  
    x:"𝓍",  
    y:"𝓎",  
    z:"𝓏"  

};  

return [...text]  
    .map(char => map[char] || char)  
    .join("");

}

function boldScript(text) {

return unicodeFont(  
    text,  
    0x1D4D0,  
    0x1D4EA  
);

}

// ======================================================
// FULLWIDTH
// ======================================================

function fullwidth(text) {

return [...text].map(char => {  

    const code =  
        char.charCodeAt(0);  

    if (  
        code >= 33 &&  
        code <= 126  
    ) {  

        return String.fromCharCode(  
            code + 0xFEE0  
        );  

    }  

    if (char === " ") {  
        return "　";  
    }  

    return char;  

}).join("");

}

// ======================================================
// SMALL CAPS
// ======================================================

function smallCaps(text) {

const map = {  

    a:"ᴀ",  
    b:"ʙ",  
    c:"ᴄ",  
    d:"ᴅ",  
    e:"ᴇ",  
    f:"ғ",  
    g:"ɢ",  
    h:"ʜ",  
    i:"ɪ",  
    j:"ᴊ",  
    k:"ᴋ",  
    l:"ʟ",  
    m:"ᴍ",  
    n:"ɴ",  
    o:"ᴏ",  
    p:"ᴘ",  
    q:"ǫ",  
    r:"ʀ",  
    s:"s",  
    t:"ᴛ",  
    u:"ᴜ",  
    v:"ᴠ",  
    w:"ᴡ",  
    x:"x",  
    y:"ʏ",  
    z:"ᴢ"  

};  

return [...text]  
    .map(char =>  
        map[char.toLowerCase()] || char  
    )  
    .join("");

}

// ======================================================
// CIRCLED
// ======================================================

function circled(text) {

return [...text].map(char => {  

    const code =  
        char.charCodeAt(0);  

    if (  
        code >= 65 &&  
        code <= 90  
    ) {  

        return String.fromCodePoint(  
            0x24B6 + code - 65  
        );  

    }  

    if (  
        code >= 97 &&  
        code <= 122  
    ) {  

        return String.fromCodePoint(  
            0x24D0 + code - 97  
        );  

    }  

    return char;  

}).join("");

}

// ======================================================
// DECORATIONS
// ======================================================

function combining(text, mark) {

return [...text].map(char => {  

    if (char === " ") {  
        return char;  
    }  

    return char + mark;  

}).join("");

}

function underline(text) {
return combining(text, "\u0332");
}

function doubleUnderline(text) {
return combining(text, "\u0333");
}

function strike(text) {
return combining(text, "\u0336");
}

function slash(text) {
return combining(text, "\u0338");
}

function dotted(text) {
return combining(text, "\u0307");
}

function wavy(text) {
return combining(text, "\u0330");
}

// ======================================================
// SPACING
// ======================================================

function spaced(text) {
return [...text].join(" ");
}

function wideSpaced(text) {
return [...text].join("   ");
}

function dotsBetween(text) {
return [...text].join(" • ");
}

function heartsBetween(text) {
return [...text].join(" ♥ ");
}

function starsBetween(text) {
return [...text].join(" ★ ");
}

// ======================================================
// EMOJI STYLES
// ======================================================

function fire(text) {
return "🔥 " + text + " 🔥";
}

function heart(text) {
return "❤️ " + text + " ❤️";
}

function star(text) {
return "⭐ " + text + " ⭐";
}

function sparkle(text) {
return "✨ " + text + " ✨";
}

function crown(text) {
return "👑 " + text + " 👑";
}

function diamond(text) {
return "💎 " + text + " 💎";
}

function rocket(text) {
return "🚀 " + text + " 🚀";
}

function cool(text) {
return "😎 " + text + " 😎";
}

// ======================================================
// FONT LIST
// ======================================================

const fonts = [

["Bold", bold],  
["Italic", italic],  
["Bold Italic", boldItalic],  
["Monospace", monospace],  

["Sans", sans],  
["Sans Bold", sansBold],  
["Sans Italic", sansItalic],  
["Sans Bold Italic", sansBoldItalic],  

["Fraktur", fraktur],  
["Bold Fraktur", boldFraktur],  

["Double Struck", doubleStruck],  

["Script", script],  
["Bold Script", boldScript],  

["Fullwidth", fullwidth],  
["Small Caps", smallCaps],  
["Circled", circled],  

["Underline", underline],  
["Double Underline", doubleUnderline],  
["Strikethrough", strike],  
["Slashed", slash],  
["Dotted", dotted],  
["Wavy", wavy],  

["Spaced", spaced],  
["Wide Spaced", wideSpaced],  
["Dots Between", dotsBetween],  
["Hearts Between", heartsBetween],  
["Stars Between", starsBetween],  

["🔥 Fire", fire],  
["❤️ Heart", heart],  
["⭐ Star", star],  
["✨ Sparkle", sparkle],  
["👑 Crown", crown],  
["💎 Diamond", diamond],  
["🚀 Rocket", rocket],  
["😎 Cool", cool]

];

// ======================================================
// DECORATIONS
// ======================================================

const decorations = [

["★", "★"],  
["☆", "☆"],  
["♡", "♡"],  
["♥", "♥"],  
["◆", "◆"],  
["◇", "◇"],  
["✦", "✦"],  
["✧", "✧"],  
["『", "』"],  
["【", "】"],  
["《", "》"],  
["〈", "〉"],  
["「", "」"],  
["꧁", "꧂"],  
["༺", "༻"]

];

// ======================================================
// FINAL FONT LIST
// ======================================================

const finalFonts = [];

fonts.forEach(font => {

finalFonts.push({  
    name: font[0],  
    convert: font[1]  
});  

decorations.forEach(  
    (decoration, index) => {  

        finalFonts.push({  

            name:  
                font[0] +  
                " Decoration " +  
                (index + 1),  

            convert: function(text) {  

                return (  
                    decoration[0] +  
                    " " +  
                    font[1](text) +  
                    " " +  
                    decoration[1]  
                );  

            }  

        });  

    }  

);

});

// ======================================================
// COLOR PICKER
// ======================================================

function createColorPicker() {

if (  
    document.getElementById(  
        "fontColorPicker"  
    )  
) {  
    return;  
}  


const box =  
    document.createElement("div");  


box.id =  
    "fontColorPicker";  


box.innerHTML = `  

    <div class="color-title">  
        <strong>🎨 Text Color</strong>  
    </div>  

    <div class="color-controls">  

        <input  
            type="color"  
            id="fontColor"  
            value="#000000"  
            title="Choose text color"  
        >  

        <button  
            type="button"  
            data-color="#000000"  
            class="color-btn black"  
        >  
            Black  
        </button>  

        <button  
            type="button"  
            data-color="#0066ff"  
            class="color-btn blue"  
        >  
            Blue  
        </button>  

        <button  
            type="button"  
            data-color="#ff0000"  
            class="color-btn red"  
        >  
            Red  
        </button>  

        <button  
            type="button"  
            data-color="#008000"  
            class="color-btn green"  
        >  
            Green  
        </button>  

        <button  
            type="button"  
            data-color="#800080"  
            class="color-btn purple"  
        >  
            Purple  
        </button>  

        <button  
            type="button"  
            data-color="#ff1493"  
            class="color-btn pink"  
        >  
            Pink  
        </button>  

        <button  
            type="button"  
            data-color="#ffa500"  
            class="color-btn orange"  
        >  
            Orange  
        </button>  

        <button  
            type="button"  
            data-color="#d4af37"  
            class="color-btn gold"  
        >  
            Gold  
        </button>  

    </div>  
`;  


const stylesHeader =  
    document.querySelector(  
        ".styles-header"  
    );  


if (stylesHeader) {  

    stylesHeader.parentElement  
        .insertBefore(  
            box,  
            document.getElementById("fontList")  
        );  

} else {  

    fontList.parentElement  
        .insertBefore(  
            box,  
            fontList  
        );  

}  


// Color picker  
const colorPicker =  
    document.getElementById(  
        "fontColor"  
    );  


colorPicker.addEventListener(  
    "input",  
    event => {  

        selectedColor =  
            event.target.value;  

        showFonts();  

    }  
);  


// Preset colors  
box.querySelectorAll(  
    "[data-color]"  
).forEach(button => {  

    button.addEventListener(  
        "click",  
        event => {  

            event.preventDefault();  

            selectedColor =  
                button.dataset.color;  

            colorPicker.value =  
                selectedColor;  

            showFonts();  

        }  
    );  

});

}

// ======================================================
// SHOW FONTS
// ======================================================

function showFonts() {

if (!fontList) {  
    return;  
}  


const text =  
    textInput.value ||  
    "Hello World";  


const search =  
    searchInput  
        ? searchInput.value  
            .trim()  
            .toLowerCase()  
        : "";  


fontList.innerHTML = "";  


const filtered =  
    finalFonts.filter(font => {  

        return font.name  
            .toLowerCase()  
            .includes(search);  

    });  


filtered.forEach(font => {  

    const result =  
        font.convert(text);  


    const item =  
        document.createElement("div");  


    item.className =  
        "font-card";  


    const content =  
        document.createElement("div");  


    content.className =  
        "font-content";  


    const name =  
        document.createElement("span");  


    name.className =  
        "font-name";  


    name.textContent =  
        font.name;  


    const preview =  
        document.createElement("div");  


    preview.className =  
        "font-preview";  


    preview.textContent =  
        result;  


    preview.style.color =  
        selectedColor;  


    content.appendChild(name);  
    content.appendChild(preview);  


    const copyButton =  
        document.createElement("button");  


    copyButton.className =  
        "copy-btn";  


    copyButton.type =  
        "button";  


    copyButton.textContent =  
        "📋 Copy";  


    copyButton.addEventListener(  
        "click",  
        async () => {  

            try {  

                await navigator.clipboard  
                    .writeText(result);  

                copyButton.textContent =  
                    "✓ Copied!";  

                setTimeout(() => {  

                    copyButton.textContent =  
                        "📋 Copy";  

                }, 1500);  

            } catch {  

                copyButton.textContent =  
                    "Copy failed";  

            }  

        }  
    );  


    item.appendChild(content);  
    item.appendChild(copyButton);  


    fontList.appendChild(item);  

});  


if (noResults) {  

    noResults.style.display =  
        filtered.length === 0  
            ? "block"  
            : "none";  

}

}

// ======================================================
// CHARACTER COUNT
// ======================================================

function updateCharacterCount() {

const counter =  
    document.getElementById(  
        "characterCount"  
    );  


if (!counter) {  
    return;  
}  


counter.textContent =  
    `${textInput.value.length} / 500`;

}

// ======================================================
// SEARCH
// ======================================================

if (searchInput) {

searchInput.addEventListener(  
    "input",  
    showFonts  
);

}

// ======================================================
// TEXT INPUT
// ======================================================

if (textInput) {

textInput.addEventListener(  
    "input",  
    () => {  

        showFonts();  
        updateCharacterCount();  

    }  
);

}

// ======================================================
// START
// ======================================================

createColorPicker();

showFonts();

updateCharacterCount();