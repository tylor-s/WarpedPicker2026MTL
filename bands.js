// spotify / ytmusic / apple = null means link not found yet

const BANDS = [
  { name: "3OH!3",
    spotify: "https://open.spotify.com/artist/0FWzNDaEu9jdgcYTbcOa4F",
    ytmusic: "https://music.youtube.com/channel/UC3IBRaFnWgy28FbS8y_hvQg",
    apple:   "https://music.apple.com/us/artist/3oh-3/260388828" },

  { name: "A Day To Remember",
    spotify: "https://open.spotify.com/artist/4NiJW4q9ichVqL1aUsgGAN",
    ytmusic: "https://music.youtube.com/channel/UCjj9ewTJYkVjuXBVrSlpMug",
    apple:   "https://music.apple.com/us/artist/a-day-to-remember/59925710" },

  { name: "Acceptance",
    spotify: "https://open.spotify.com/artist/4zCbNayYzorqdzd9mPrghW",
    ytmusic: "https://music.youtube.com/channel/UCNZhWLO05MoI1K0NLtfaXlA",
    apple:   "https://music.apple.com/us/artist/acceptance/7017121" },

  { name: "Agnostic Front",
    spotify: "https://open.spotify.com/artist/3zDvanHxaETiHltPkKKYhT",
    ytmusic: "https://music.youtube.com/channel/UC16HnZZN6lKi2dmZ_XTJZkA",
    apple:   "https://music.apple.com/us/artist/agnostic-front/45435391" },

  { name: "All Time Low",
    spotify: "https://open.spotify.com/artist/46gyXjRIvN1NL1eCB8GBxo",
    ytmusic: "https://music.youtube.com/channel/UCSLQKylf_bibeVwMnBO1MRg",
    apple:   "https://music.apple.com/us/artist/all-time-low/167375968" },

  { name: "Angel Du$t",
    spotify: "https://open.spotify.com/artist/2ynylCO9SRPTKjgNEH0Y2a",
    ytmusic: "https://music.youtube.com/channel/UC1B3rIjX100hz8eRld4KG_Q",
    apple:   "https://music.apple.com/us/artist/angel-du%24t/657097036" },

  { name: "Atreyu",
    spotify: "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv",
    ytmusic: "https://music.youtube.com/channel/UCXN3jg1BrFxoyJHtoq3--xA",
    apple:   "https://music.apple.com/us/artist/atreyu/6095061" },

  { name: "Bad Cop Bad Cop",
    spotify: "https://open.spotify.com/artist/226ZwHRFmxyMqgXCoEkUbq",
    ytmusic: "https://music.youtube.com/channel/UCeLPTR4EKREYmabufGXmNgg",
    apple:   "https://music.apple.com/us/artist/bad-cop-bad-cop/335899358" },

  { name: "Basterds",
    spotify: "https://open.spotify.com/artist/6xVKy3vtmK37fIthk9ic3o",
    ytmusic: "https://music.youtube.com/channel/UCPyWKdyAdfYIlT7Tr-RZ2Ew",
    apple:   "https://music.apple.com/us/artist/basterds/1244099810" },

  { name: "Bearings",
    spotify: "https://open.spotify.com/artist/0qpDBxRgLp6g0k2esJlUDn",
    ytmusic: "https://music.youtube.com/channel/UCl6iv33LMdN9kTbc863Fbwg",
    apple:   "https://music.apple.com/us/artist/bearings/341072031" },

  { name: "Béton Armé",
    spotify: "https://open.spotify.com/artist/7B9AYoMBJAGlHtB97cPt9z",
    ytmusic: "https://music.youtube.com/channel/UCVYjgfW8W6UVa4rD2lvH0_A",
    apple:   "https://music.apple.com/us/artist/b%C3%A9ton-arm%C3%A9/1538401348" },

  { name: "Big Ass Truck I.E.",
    spotify: "https://open.spotify.com/artist/1IegtgbvrijV4Rzw07RYM2",
    ytmusic: "https://music.youtube.com/channel/UCqSqVeCLl8l_kKprirvdr5A",
    apple:   "https://music.apple.com/gb/artist/big-ass-truck-i-e/1799832122" },

  { name: "Bigwig",
    spotify: "https://open.spotify.com/artist/5sBf8ZpK2u8VXjsJ0e6Kma",
    ytmusic: "https://music.youtube.com/channel/UC7njvctFOAutmxlzdEb9WXg",
    apple:   "https://music.apple.com/us/artist/bigwig/4620091" },

  { name: "Boston Manor",
    spotify: "https://open.spotify.com/artist/4WjeQi9wm84lYTIWZ95QoM",
    ytmusic: "https://music.youtube.com/channel/UC9VceZTC8PvTXwShAf5kLfA",
    apple:   "https://music.apple.com/us/artist/boston-manor/453487358" },

  { name: "Bowling For Soup",
    spotify: "https://open.spotify.com/artist/5ND0mGcL9SKSjWIjPd0xIb",
    ytmusic: "https://music.youtube.com/channel/UCWhD0VgQnYhb9ZcuLzE9RNw",
    apple:   "https://music.apple.com/us/artist/bowling-for-soup/1650849" },

  { name: "Bruiserweight",
    spotify: "https://open.spotify.com/artist/3Sn6z2aKNMMPkg0t2OiT73",
    ytmusic: "https://music.youtube.com/channel/UCrEpNPXYvHw27_8Ck98iC3A",
    apple:   "https://music.apple.com/us/artist/bruiserweight/1688399075" },

  { name: "Cartel",
    spotify: "https://open.spotify.com/artist/6wQMF27xWhSyJFnO9L5mQk",
    ytmusic: "https://music.youtube.com/channel/UCXwxTXS9s4Trglu9u-9XVew",
    apple:   "https://music.apple.com/us/artist/cartel/19107135" },

  { name: "Chase Petra",
    spotify: "https://open.spotify.com/artist/1MTlhWSyxv11aeqREGEeb3",
    ytmusic: "https://music.youtube.com/channel/UCVr9WcexT7Ea4zyZ9B4223w",
    apple:   "https://music.apple.com/us/artist/chase-petra/1203481112" },

  { name: "Chiodos",
    spotify: "https://open.spotify.com/artist/4ZIBrskTJWmkJUvM7uAu1o",
    ytmusic: "https://music.youtube.com/channel/UCHpttVC36T04Tt6CFTk04xg",
    apple:   "https://music.apple.com/us/artist/chiodos/74900736" },

  { name: "Colorsfade",
    spotify: "https://open.spotify.com/artist/35CbXobNPRHS3pCjzoeHpA",
    ytmusic: "https://music.youtube.com/channel/UC55BAIsifs_-CffLCTNPKaw",
    apple:   "https://music.apple.com/us/artist/colorsfade/1153690742" },

  { name: "Comeback Kid",
    spotify: "https://open.spotify.com/artist/67f7GZXNMGRn98lqrtIdrN",
    ytmusic: "https://music.youtube.com/channel/UCVzSgIiBu8EWBj2wgoMJFEA",
    apple:   "https://music.apple.com/us/artist/comeback-kid/7581156" },

  { name: "Concrete Vehicles",
    spotify: null,   // ← FLAG
    ytmusic: null,   // ← FLAG
    apple:   null }, // ← FLAG

  { name: "Counterparts",
    spotify: "https://open.spotify.com/artist/5LyRnL0rysObxDRxzSfV1z",
    ytmusic: "https://music.youtube.com/channel/UCoWNAjvWNqLqtBadrBCmEDw",
    apple:   "https://music.apple.com/us/artist/counterparts/4057859" },

  { name: "Cross Check",
    spotify: "https://open.spotify.com/artist/41CQdBrlzyttCIgSSap3BW",
    ytmusic: "https://music.youtube.com/channel/UCZ5_jzE8PpkY28dA-YR4ihA",
    apple:   "https://music.apple.com/gb/artist/cross-check/1686591876" },

  { name: "Desecrate",
    spotify: "https://open.spotify.com/artist/4faxeLoAZEWZbW6EscijYx",
    ytmusic: "https://music.youtube.com/channel/UCQO7FbcnGrCTWdkYG1MmHkQ",
    apple:   "https://music.apple.com/gb/artist/desecrate/1671209618" },

  { name: "Despised Icon",
    spotify: "https://open.spotify.com/artist/3MjNMjqBpaQ0P8ebfbZjYn",
    ytmusic: "https://music.youtube.com/channel/UC4NBXLFNA_12JMAYzUmt5zg",
    apple:   "https://music.apple.com/us/artist/despised-icon/64636070" },

  { name: "Drug Church",
    spotify: "https://open.spotify.com/artist/6q4AmzK3GzCuEzkurnYuEQ",
    ytmusic: "https://music.youtube.com/channel/UC_SGy1tgjrsvlBXkEcWxAyg",
    apple:   "https://music.apple.com/us/artist/drug-church/535993200" },

  { name: "Escape The Fate",
    spotify: "https://open.spotify.com/artist/5ojhEavq6altxW8fWIlLum",
    ytmusic: "https://music.youtube.com/channel/UCx2op0Cvq3d6NQUf9B0wBQg",
    apple:   "https://music.apple.com/us/artist/escape-the-fate/145719026" },

  { name: "Fair Warning",
    spotify: "https://open.spotify.com/artist/6c8OxF3wYMJ6V9DrmHmO2k",
    ytmusic: "https://music.youtube.com/channel/UCZ6NhK3cUN2W4lRsf9J1Ykw",
    apple:   "https://music.apple.com/us/artist/fair-warning/71968662" },

  { name: "Flogging Molly",
    spotify: "https://open.spotify.com/artist/5kQGFREO5FzMBMsAO3cEtj",
    ytmusic: "https://music.youtube.com/channel/UC8zwfTwx1vTZzM-fEclayuw",
    apple:   "https://music.apple.com/us/artist/flogging-molly/22327570" },

  { name: "Four Year Strong",
    spotify: "https://open.spotify.com/artist/0qqxspZOkbN00bu6DaRIrn",
    ytmusic: "https://music.youtube.com/channel/UCMqxtxW33P-bc8b9_WHAk0g",
    apple:   "https://music.apple.com/us/artist/four-year-strong/192476371" },

  { name: "Gob",
    spotify: "https://open.spotify.com/artist/0c4fpXIFPFNve1CxmGgXQf",
    ytmusic: "https://music.youtube.com/channel/UCzEhglHexVQjGT7wPp8gB6w",
    apple:   "https://music.apple.com/us/artist/gob/469603" },

  { name: "Good Riddance",
    spotify: "https://open.spotify.com/artist/1Yunxnwa5znrQ9Ha7dZeHO",
    ytmusic: "https://music.youtube.com/channel/UCbdkp56m6kCWzXznuDNpZHg",
    apple:   "https://music.apple.com/us/artist/good-riddance/5381593" },

  { name: "Good Sleepy",
    spotify: "https://open.spotify.com/artist/7BPOW1Qhb4yKQ4L7c9peGB",
    ytmusic: "https://music.youtube.com/channel/UCBRkJcMVcCPwsW-k2vD0a1A",
    apple:   "https://music.apple.com/us/artist/good-sleepy/1380516779" },

  { name: "Hawthorne Heights",
    spotify: "https://open.spotify.com/artist/126FigDBtqwS2YsOYMTPQe",
    ytmusic: "https://music.youtube.com/channel/UC38ZR0PO3JPk0AHE6_pVd5w",
    apple:   "https://music.apple.com/us/artist/hawthorne-heights/92149634" },

  { name: "Ice Nine Kills",
    spotify: "https://open.spotify.com/artist/52qKfVcIV4GS8A8Vay2xtt",
    ytmusic: "https://music.youtube.com/channel/UCraPpF98TgLnoL9QwT8vQBg",
    apple:   "https://music.apple.com/us/artist/ice-nine-kills/204318665" },

  { name: "Illscarlett",
    spotify: "https://open.spotify.com/artist/7wifMhiQRkNVGDL3habHha",
    ytmusic: "https://music.youtube.com/channel/UC3Kl7l3R_GCBTWrLq9moL7Q",
    apple:   "https://music.apple.com/us/artist/illscarlett/203086346" },

  { name: "Initiate",
    spotify: "https://open.spotify.com/artist/4chi4s0FYncuGQul8cezau",
    ytmusic: "https://music.youtube.com/channel/UCfoysAMnSnY7CJViYPO2i0g",
    apple:   "https://music.apple.com/us/artist/initiate/1440572303" },

  { name: "Jimmy Eat World",
    spotify: "https://open.spotify.com/artist/3Ayl7mCk0nScecqOzvNp6s",
    ytmusic: "https://music.youtube.com/channel/UCFeCvEjX56ReS-O3QHdyjbA",
    apple:   "https://music.apple.com/us/artist/jimmy-eat-world/3446973" },

  { name: "Joyce Manor",
    spotify: "https://open.spotify.com/artist/7qbvNcfTfckhCNM8NiR8nN",
    ytmusic: "https://music.youtube.com/channel/UCFoimeXqfzgObQ4lcvX3NEg",
    apple:   "https://music.apple.com/us/artist/joyce-manor/408598559" },

  { name: "Jutes",
    spotify: "https://open.spotify.com/artist/53fzjsJnjEKkA6TdncuIM4",
    ytmusic: "https://music.youtube.com/channel/UCcJmA7v3F1swgu_5JiwH4Ug",
    apple:   "https://music.apple.com/us/artist/jutes/603222293" },

  { name: "K-Man & The 45s",
    spotify: "https://open.spotify.com/artist/5ElvgxK8YpteV93zGRSpkV",
    ytmusic: "https://music.youtube.com/channel/UC2jxF1M2FVB6UqYQEdPtYPg",
    apple:   "https://music.apple.com/us/artist/k-man-the-45s/439587821" },

  { name: "letlive.",
    spotify: "https://open.spotify.com/artist/5ACBALsFxT5Ab3gVe8yyPs",
    ytmusic: "https://music.youtube.com/channel/UCBH4yJNnthK-gHVLgEqmjZA",
    apple:   "https://music.apple.com/us/artist/letlive/271185074" },

  { name: "LØLØ",
    spotify: "https://open.spotify.com/artist/5MjcGshMggPgIHinIUDaX0",
    ytmusic: "https://music.youtube.com/channel/UCMgn05wA8bs-xFykolBsbQA",
    apple:   "https://music.apple.com/us/artist/l%C3%B8l%C3%B8/1378649732" },

  { name: "Mad Caddies",
    spotify: "https://open.spotify.com/artist/0cmBbO2sr4w0rRGt3rKvs6",
    ytmusic: "https://music.youtube.com/channel/UCqvUYmiuI0hHHBO6jehI3Fg",
    apple:   "https://music.apple.com/us/artist/mad-caddies/45446530" },

  { name: "Madball",
    spotify: "https://open.spotify.com/artist/1qh6ppVtiFTKMyta0NXsjf",
    ytmusic: "https://music.youtube.com/channel/UCyzNMY8kAe2ujNisB4_GNOg",
    apple:   "https://music.apple.com/us/artist/madball/7255611" },

  { name: "Mayday Parade",
    spotify: "https://open.spotify.com/artist/3WfJ1OtrWI7RViX9DMyEGy",
    ytmusic: "https://music.youtube.com/channel/UCBK4V-rBGFPcCSMI73rNUXA",
    apple:   "https://music.apple.com/us/artist/mayday-parade/192466619" },

  { name: "Microwave",
    spotify: "https://open.spotify.com/artist/7ptm7G8z8VVvwBnDq8fAmD",
    ytmusic: "https://music.youtube.com/channel/UCyoHhmvy10gBz9yDjU_Jsxg",
    apple:   "https://music.apple.com/us/artist/microwave/613522668" },

  { name: "Mulch",
    spotify: "https://open.spotify.com/artist/2LPgsI4nbAC19MXyJkZv63",
    ytmusic: "https://music.youtube.com/channel/UCG_OD2Wc2lpytzwOHaCGO5w",
    apple:   "https://music.apple.com/gb/artist/mulch/203648816" },

  { name: "MxPx",
    spotify: "https://open.spotify.com/artist/1cSpfa4Un4NCOzeOKgGtG9",
    ytmusic: "https://music.youtube.com/channel/UCDBGKW_i7qM17LK17Orq7zw",
    apple:   "https://music.apple.com/us/artist/mxpx/133120" },

  { name: "nothing,nowhere.",
    spotify: "https://open.spotify.com/artist/7FngGIEGgN3Iwauw1MvO4P",
    ytmusic: "https://music.youtube.com/channel/UCBEWNR_x89cYolTNhuV7-Fw",
    apple:   "https://music.apple.com/us/artist/nothing-nowhere/1099433152" },

  { name: "Of Mice & Men",
    spotify: "https://open.spotify.com/artist/4tususHNaR68xdgLstlGBA",
    ytmusic: "https://music.youtube.com/channel/UCrh0I8I0l6eAj2DuW0GE_Fg",
    apple:   "https://music.apple.com/us/artist/of-mice-men/127357180" },

  { name: "Origami Angel",
    spotify: "https://open.spotify.com/artist/0cmSXx965Hnm6fP42oW6vY",
    ytmusic: "https://music.youtube.com/channel/UCHeSSkBLacJIfYWaTGh0FXA",
    apple:   "https://music.apple.com/us/artist/origami-angel/1268165648" },

  { name: "Oxymorrons",
    spotify: "https://open.spotify.com/artist/3GDw9k8FzlOUxPzDUaUhlZ",
    ytmusic: "https://music.youtube.com/channel/UC74jCWaxaSUoBg-JwlBRThA",
    apple:   "https://music.apple.com/us/artist/oxymorrons/569334264" },

  { name: "Peer Pressure",
    spotify: "https://open.spotify.com/artist/4LjqrkcbfHIV0CXWyjcwtW",
    ytmusic: "https://music.youtube.com/channel/UCM13a4EKsjs5svkPz2fA5xw",
    apple:   "https://music.apple.com/us/artist/peer-pressure/1347911755" },

  { name: "Pennywise",
    spotify: "https://open.spotify.com/artist/6i0KVTOvm96T55mbp742ks",
    ytmusic: "https://music.youtube.com/channel/UCaqhFGLjN--Qq9W60qCcRHg",
    apple:   "https://music.apple.com/us/artist/pennywise/2820315" },

  { name: "Punchline 13",
    spotify: "https://open.spotify.com/artist/6TPmpNJTVXsPvqtlYztNkC",
    ytmusic: "https://music.youtube.com/channel/UCc9qGLORXKsH_HGDJOW6zBg",
    apple:   "https://music.apple.com/us/artist/punchline-13/635474506" },

  { name: "sace6",
    spotify: "https://open.spotify.com/artist/3II4BTkM0mJbwvFxVJRdeS",
    ytmusic: "https://music.youtube.com/channel/UCR6xzR2Cckay7f2Q72YnefQ",
    apple:   "https://music.apple.com/us/artist/sace6/1546898631" },

  { name: "Scorching Tomb",
    spotify: "https://open.spotify.com/artist/4fqQjlP8gdh1sKCwEJBlYP",
    ytmusic: "https://music.youtube.com/channel/UCA7ZftzNTFp0Hu4P_6mxteQ",
    apple:   "https://music.apple.com/us/artist/scorching-tomb/1573118727" },

  { name: "Silverstein",
    spotify: "https://open.spotify.com/artist/1Tsag5J854qxeOo2apszug",
    ytmusic: "https://music.youtube.com/channel/UChQidgcBzCuN2IOQ6s1wRFw",
    apple:   "https://music.apple.com/us/artist/silverstein/2621140" },

  { name: "Simple Plan",
    spotify: "https://open.spotify.com/artist/2p4FqHnazRucYQHyDCdBrJ",
    ytmusic: "https://music.youtube.com/channel/UCKI33Zd-b17rDIcPSv9E_-w",
    apple:   "https://music.apple.com/us/artist/simple-plan/150861" },

  { name: "Sleep Theory",
    spotify: "https://open.spotify.com/artist/26eBHxdouBH2KB7P6Oi9HN",
    ytmusic: "https://music.youtube.com/channel/UCSydB_KMpwqlfGZL7C5X-6g",
    apple:   "https://music.apple.com/us/artist/sleep-theory/1624884753" },

  { name: "Spike And The Gimme Gimmes",
    spotify: "https://open.spotify.com/artist/3aNYAdtAmRjvpNpIA9f3hx",
    ytmusic: "https://music.youtube.com/channel/UCVib3ZOtX1-59JqaAKA1J_A",
    apple:   "https://music.apple.com/us/artist/spike-and-the-gimme-gimmes/1851589000" },

  { name: "Spite House",
    spotify: "https://open.spotify.com/artist/3ORse2pnaM7OvXoqIgS1pN",
    ytmusic: "https://music.youtube.com/channel/UC8V5H2Fdpbva2bAoblwUH9Q",
    apple:   "https://music.apple.com/us/artist/spite-house/1609200584" },

  { name: "Strung Out",
    spotify: "https://open.spotify.com/artist/07ATE522e8aDsEb0JVLYqg",
    ytmusic: "https://music.youtube.com/channel/UCbZwv0di-Wu52oMdwn6esAA",
    apple:   "https://music.apple.com/us/artist/strung-out/20729359" },

  { name: "Sublime",
    spotify: "https://open.spotify.com/artist/0EdvGhlC1FkGItLOWQzG4J",
    ytmusic: "https://music.youtube.com/channel/UCEJ-A6sXsxg0PxdUjgrF2Jw",
    apple:   "https://music.apple.com/us/artist/sublime/63480" },

  { name: "Suckerpunch!",
    spotify: "https://open.spotify.com/artist/02tk2pnlF7dDfwMVhth4pp",
    ytmusic: "https://music.youtube.com/channel/UChsOKOwxZRhu_qNLMQUuWfg",
    apple:   "https://music.apple.com/us/artist/suckerpunch/1611132434" },

  { name: "Sudden Waves",
    spotify: "https://open.spotify.com/artist/3fA5EcbKHHdkbXE9VEHAsY",
    ytmusic: "https://music.youtube.com/channel/UCCp5xprAPWzDVuvk8KSPzcg",
    apple:   "https://music.apple.com/us/artist/sudden-waves/1396197172" },

  { name: "Sunami",
    spotify: "https://open.spotify.com/artist/1pBeRGeBHNPLy95LswDViS",
    ytmusic: "https://music.youtube.com/channel/UCb-j_ARTaJ7V-kVFeNKHx5A",
    apple:   "https://music.apple.com/us/artist/sunami/1556091242" },

  { name: "Taking Back Sunday",
    spotify: "https://open.spotify.com/artist/24XtlMhEMNdi822vi0MhY1",
    ytmusic: "https://music.youtube.com/channel/UC62VlucV7MFnEFPBatIOeLw",
    apple:   "https://music.apple.com/us/artist/taking-back-sunday/16053322" },

  { name: "The Anti-Queens",
    spotify: "https://open.spotify.com/artist/1CX0fdiDs9n9HSJs1PRSy3",
    ytmusic: "https://music.youtube.com/channel/UCdR4slxqfoSw7FRMm3pdsTg",
    apple:   "https://music.apple.com/us/artist/the-anti-queens/665691582" },

  { name: "The Ataris",
    spotify: "https://open.spotify.com/artist/3LC8PXXgk7YtAIobtjSdNi",
    ytmusic: "https://music.youtube.com/channel/UCDTXJ_GT5FeKAPIPQnyLm5g",
    apple:   "https://music.apple.com/us/artist/the-ataris/1046357" },

  { name: "The Devil Wears Prada",
    spotify: "https://open.spotify.com/artist/0NbQe5CNgh4YApOCDuHSjb",
    ytmusic: "https://music.youtube.com/channel/UCYaSz9Ywjgv7J_Wjdx2Y37A",
    apple:   "https://music.apple.com/us/artist/the-devil-wears-prada/189224243" },

  { name: "The Last Mile",
    spotify: "https://open.spotify.com/artist/5I4hKHeEYKMauc062zloC9",
    ytmusic: "https://music.youtube.com/channel/UCAB2Dv6Uk6Ho_kRWt-fRvVQ",
    apple:   "https://music.apple.com/us/artist/the-last-mile/1525639571" },

  { name: "The Menzingers",
    spotify: "https://open.spotify.com/artist/7HWFXU9pHBj0u58yoRwwOJ",
    ytmusic: null,  // ← still needed
    apple:   "https://music.apple.com/us/artist/the-menzingers/259772848" },

  { name: "The Paradox",
    spotify: "https://open.spotify.com/artist/6GhcI55xfZf5vqmmNqYzxW",
    ytmusic: "https://music.youtube.com/channel/UCAgPDQ0haCpdUm7FGQoYStw",
    apple:   "https://music.apple.com/us/artist/the-paradox/1758410917" },

  { name: "The Planet Smashers",
    spotify: "https://open.spotify.com/artist/2wYNzTzigUWAeVLaxeRrg3",
    ytmusic: "https://music.youtube.com/channel/UC-fVKlMX1LF2Csm3qp1hyPQ",
    apple:   "https://music.apple.com/us/artist/the-planet-smashers/21888380" },

  { name: "The Red Jumpsuit Apparatus",
    spotify: "https://open.spotify.com/artist/1SImpQO0GbjRgvlwCcCtFo",
    ytmusic: "https://music.youtube.com/channel/UCedwWl_3R9I9s2Q3kWmn6WA",
    apple:   "https://music.apple.com/us/artist/the-red-jumpsuit-apparatus/130037074" },

  { name: "Thrice",
    spotify: "https://open.spotify.com/artist/3NChzMpu9exTlNPiqUQ2DE",
    ytmusic: "https://music.youtube.com/channel/UC_gH-AQqoOUZ4ykZBCLdvww",
    apple:   "https://music.apple.com/us/artist/thrice/1663706" },

  { name: "Thursday",
    spotify: "https://open.spotify.com/artist/61awhbNK16ku1uQyXRsQj5",
    ytmusic: "https://music.youtube.com/channel/UCSRPiMwyqKqbY6PVExIHgxg",
    apple:   "https://music.apple.com/us/artist/thursday/1731570" },

  { name: "Yellowcard",
    spotify: "https://open.spotify.com/artist/3zxKH0qp3nBCuPZCZT5Vaf",
    ytmusic: "https://music.youtube.com/channel/UCHMEZ3PbLh48_yd881bkJpw",
    apple:   "https://music.apple.com/us/artist/yellowcard/2307230" },
];

const TIERS = [
  { name: "Must See",      color: "#FFD700", text: "#000" },
  { name: "Wanna See",     color: "#44AAFF", text: "#000" },
  { name: "Maybe",         color: "#AAAAAA", text: "#000" },
  { name: "Probably Skip", color: "#FF7733", text: "#000" },
  { name: "Skip",          color: "#444444", text: "#bbb" }
];
