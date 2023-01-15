function smallnum() { 
    var num = args[0].toLowerCase();
    num = num.replaceAll("1", "₁").replaceAll("2", "₂").replaceAll("3", "₃").replaceAll("4", "₄").replaceAll("5", "₅").replaceAll("6", "₆").replaceAll("7", "₇").replaceAll("8", "₈").replaceAll("9", "₉").replaceAll("0", "₀").replaceAll("h", "&4ʜ&c").replaceAll("m", "&4ᴍ&c").replaceAll("s", "&4ꜱ");
    return num;
}
smallnum();