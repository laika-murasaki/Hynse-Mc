var placeholder = "%voicechat_prefix_uses_voicechat%";
var voice = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, placeholder);

var checkVoice = function (voice) {
  return voice === "§a" ? "&#aaff00|" : "&#525e3a|";
};

checkVoice(voice);