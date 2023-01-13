export type Token = {
  /**
   * Figma's unique style IDs.
   * - All IDs are assumed to be normalized (e.g., removed 'S:').
   */
  id: string;
  /**
   * kebab-case VDS token name.
   * - vds-gray-100
   */
  name: string;
};
export type TokenGroup = {
  [key: string]: ReadonlyArray<Token>;
};

export const allColorTokens: TokenGroup = {
  elation: [
    {
      id: "edd5a498bfe7db120ca7b41c832755422a75b0d7",
      name: "vds-elation-blue"
    },
    {
      id: "2b84d0209a81d786c1b1fdb8f4444ced37d77dbb",
      name: "vds-elation-orange"
    },
    {
      id: "68919c9440ce057aaeb30bb3cc893afc5f9ceb52",
      name: "vds-elation-navy"
    },
    {
      id: "bbeb2088858af38a5c256835695640b01ccc66a0",
      name: "vds-elation-dark-spruce"
    }
  ],
  gray: [
    { id: "4f99e07106c35975cba535638fbb6b639958f437", name: "vds-gray-white" },
    { id: "994781845b38402118d9d6c427a4d910265b9c29", name: "vds-gray-black" },
    { id: "edaceef029a7d6f968610dc567a9adf6a05f603b", name: "vds-gray-1000" },
    { id: "d884fd13b46f31be56e7ab8ef75a1a72e51bf7b9", name: "vds-gray-900" },
    { id: "6db8e175fa096993425274908a81c4aadd79a020", name: "vds-gray-800" },
    { id: "97000e1a9f83872d41d74b16fa7c1508a01ae519", name: "vds-gray-700" },
    { id: "cce0aca0085edaed56746073aa685d34dc6deb24", name: "vds-gray-600" },
    { id: "e290ff8d5f8b864a8836c0a3e902fe0eb7cd5afa", name: "vds-gray-500" },
    { id: "4aace76f457429061b554a810ab7ab833e9f47c5", name: "vds-gray-400" },
    { id: "17188f5e97085bc52548bf38c9e9c4e3bca9505a", name: "vds-gray-300" },
    { id: "c7ca4339675f04524a67de5d32c944264a1a4610", name: "vds-gray-200" },
    { id: "77b01ab988fe398bc08a4b5bdbdd6b5545c78816", name: "vds-gray-100" },
    { id: "0db717952b540bcb87f4acadc42b5d8ef6c0be33", name: "vds-gray-75" },
    { id: "639b6d070afceaac5a8d60010d2bb516e41aee3a", name: "vds-gray-50" }
  ],
  blue: [
    { id: "9a3d1cfbe840f8de7ee55fa33e1433b8ad03f270", name: "vds-blue-1000" },
    { id: "760d86e7703a56435b9818f13a89893c3e537a5c", name: "vds-blue-900" },
    { id: "2bdf4bb40c70aa09dccdf054adde0bc4b564405d", name: "vds-blue-800" },
    { id: "d60b4755e1e74f34d5014c70ad241cf2ddaa2248", name: "vds-blue-700" },
    { id: "a2b337992929f46c855c1f8daba04127a6c03ceb", name: "vds-blue-600" },
    { id: "33756d6150d5756379e20d74becd92572642f6f9", name: "vds-blue-500" },
    { id: "cb7a505b9f9b4436bdc0133170eed0ea6c51a019", name: "vds-blue-400" },
    { id: "d5501db162f553c6a8b60d3e837c67dc4737488c", name: "vds-blue-300" },
    { id: "0dfc718f0fc353556c0cef0751836c35d819ae64", name: "vds-blue-200" },
    { id: "52928f23a183dd624bcf6c6748268cebf24fdd34", name: "vds-blue-100" },
    { id: "c126b3ce03cd607130b99e2eeffb18186d3de9ff", name: "vds-blue-75" },
    { id: "77086c68d9d7d81bcb50bbfd3526eddb42901a86", name: "vds-blue-50" }
  ],
  navy: [
    { id: "6faf86ddb5a03f1799d5cb9a26a5b6e92e9b1648", name: "vds-navy-1000" },
    { id: "e6375bce1b43eed6d54d134f18f3c9f4bbb0684f", name: "vds-navy-900" },
    { id: "acfb4f083ee5cb18e036d37499abec4968a809c6", name: "vds-navy-800" },
    { id: "c94e8baea2fb0f3393522f50d0223a4af8582726", name: "vds-navy-700" },
    { id: "1bf4e68c6dd6a5c20fe8c3fe5c7b1dee12746657", name: "vds-navy-600" },
    { id: "325f44835281eaba7b7b32ea51248994196cd5c4", name: "vds-navy-500" },
    { id: "ade36caa401c5fdfa9657a92413a0884e9098b50", name: "vds-navy-400" },
    { id: "4bb37c37d1455eb1f40509796e09000d4cc2ee05", name: "vds-navy-300" },
    { id: "a990101b0c2564eacc6784647e2d6bfe1edeaf96", name: "vds-navy-200" },
    { id: "0551c01c2d4698102104b8d32c836bcf52316f5d", name: "vds-navy-100" },
    { id: "74c3a83b01882e66084c18e21da26d4dc35f4cb7", name: "vds-navy-75" },
    { id: "db04fe100eb3075f841e475d16b6e2534f2fdd71", name: "vds-navy-50" }
  ],
  orange: [
    { id: "14b70901fcb45ba53f2653e5ce3a799dff43cccb", name: "vds-orange-1000" },
    { id: "1534d13beb51648d99cbcc8aaa95289f2995541b", name: "vds-orange-900" },
    { id: "945342377ba04d51f962c6a5acd309c2be853601", name: "vds-orange-800" },
    { id: "87b3267da410f1ba469155a0249350fd7918979b", name: "vds-orange-700" },
    { id: "e57ed41cb4a1c32455fc5cf4feaef03a5b35b1e8", name: "vds-orange-600" },
    { id: "f2844e62fb7f2a81b4d78506bd343968a351572b", name: "vds-orange-500" },
    { id: "422abfbdcec6731a9e197f7bebeb58f7f55bf50f", name: "vds-orange-400" },
    { id: "e87a07b0010d1a59ec049ebb39e6f27457cfd697", name: "vds-orange-300" },
    { id: "bf148aa18a81c2e7293af00cd15012ff4a07d557", name: "vds-orange-200" },
    { id: "cbf9d972ecbfbd3a8bb2097852f3f2cde27fb83a", name: "vds-orange-100" },
    { id: "40ed37b6068ed9f3d8bb3fe5679eac5efd8836e7", name: "vds-orange-75" },
    { id: "6fc3bb22568635ed5a489910300701507988d1be", name: "vds-orange-50" }
  ],
  red: [
    { id: "ef8c858fb5265ce821d29f742a72c2c04b6533ce", name: "vds-red-1000" },
    { id: "3dd5c9545baccb8d8a34cb809657f88c6a73d7c4", name: "vds-red-900" },
    { id: "ab2df70428886f5f9b37b79e80f617601cb323f5", name: "vds-red-800" },
    { id: "75fe2ffff4e530c6190d441e293e8ebf9abaf7e6", name: "vds-red-700" },
    { id: "dcb57d71cfe93da97c3b2fc49a027e5776f32721", name: "vds-red-600" },
    { id: "80c8934f385d62ee7c481a7aad10a319de4c2c38", name: "vds-red-500" },
    { id: "76f6808fd904a9ac1fa24b85b2ee920447f25b58", name: "vds-red-400" },
    { id: "da1ca7ef34eb90285a0b6f87e7213e940731f213", name: "vds-red-300" },
    { id: "7b106aafbf3f8aa9bee4dfa57d4398be41182955", name: "vds-red-200" },
    { id: "a1e9eb4555016ba435cfa4499fef0d773c810e90", name: "vds-red-100" },
    { id: "f340741ad4717092af029f893533cf3b223ace9c", name: "vds-red-75" },
    { id: "afdf1c46d4586facf2dbcffaa168257b395f511e", name: "vds-red-50" }
  ],
  gold: [
    { id: "7cae049c9584cb3e1cd05f52115ddd84c9bea4d8", name: "vds-gold-1000" },
    { id: "48ba8b669c3544da8ee0132a104467a6d221a89b", name: "vds-gold-900" },
    { id: "9e364270a15eedd11e12eb17052659ab761636fc", name: "vds-gold-800" },
    { id: "07e4e00366e2687227bb5c3076689d97dc40feca", name: "vds-gold-700" },
    { id: "4dd83dab6a6ae6b56d631003afffcd6a0558fc69", name: "vds-gold-600" },
    { id: "87bee2deeb6b6559aba3e9f5b213e9718622b71b", name: "vds-gold-500" },
    { id: "55d1552e2d28d37bf8fd2d7cfa2a0b4e3a1429a6", name: "vds-gold-400" },
    { id: "1d44d83cccf2b6625377f65fb3d7814f8a233bb8", name: "vds-gold-300" },
    { id: "6a3e02397074bf4e572487b4b668c2cf40a17194", name: "vds-gold-200" },
    { id: "d0319d72fd305976588cec84a03443489c5ab9e5", name: "vds-gold-100" },
    { id: "29655669e9bc129da2089aff9e8f9ac0c4ed6adc", name: "vds-gold-75" },
    { id: "762b64790647ced624b56aedfdb98cfc2ca3e98d", name: "vds-gold-50" }
  ],
  green: [
    { id: "64f434451a9c14627089a741ba9e627f8922ed04", name: "vds-green-1000" },
    { id: "b610cac9bdac50c9213f2160ce1587687fcd2249", name: "vds-green-900" },
    { id: "41e46612635989ec5789bfab8497108174cbdd7b", name: "vds-green-800" },
    { id: "eda5dd98148ec0e18d638f0720da11d9c09a084f", name: "vds-green-700" },
    { id: "b4b3ed873c20a03b21ed2878e56463e2676d91d6", name: "vds-green-600" },
    { id: "9fc0a44b1043434637a9a7e2186dc886f07f93af", name: "vds-green-500" },
    { id: "fdc9a64080e511cef37f9993c82306db2c2aed10", name: "vds-green-400" },
    { id: "bf4c4b2cb07c46b5ca4054d553cbb025cb9ff6da", name: "vds-green-300" },
    { id: "4df4f2138485206d3753f6533088e735ec4f5218", name: "vds-green-200" },
    { id: "7945be663e36792dbe8d8c12f89e01fada252398", name: "vds-green-100" },
    { id: "d62eaf68f2b21523519398ad415f3b0383b1fffa", name: "vds-green-75" },
    { id: "0520e4b4a803444925dc7221c9e114a66914f9d4", name: "vds-green-50" }
  ],
  coral: [
    { id: "869db9cd5e9d94f7c976a1d85b0dd81c9d1e65ff", name: "vds-coral-1000" },
    { id: "456545bb2e26a10a1ea7679aef3be7fd4525c21b", name: "vds-coral-900" },
    { id: "6f8adbb309d8cc064a2bfcb343be42e7fc15ba9a", name: "vds-coral-800" },
    { id: "8d61b79dbe66d86fdf30dc98afbf27846fa857ec", name: "vds-coral-700" },
    { id: "24bfc8da592488983b97a9972cced93a92e2d692", name: "vds-coral-600" },
    { id: "8610decc43a05cf52c29ddbdede44102acacb505", name: "vds-coral-500" },
    { id: "9f1e43747acdf096b5dcbc2f9d91faf6bf5c076b", name: "vds-coral-400" },
    { id: "00093a52cb5ff58ef0ca67991d51a3fc29afbfc8", name: "vds-coral-300" },
    { id: "d8b44815310bc34d617f1138376ac55d6a8a484b", name: "vds-coral-200" },
    { id: "e75f88b89b459ac599c262b6bff82456e274a08d", name: "vds-coral-100" },
    { id: "f7229273411503faca779a1dd67f3dd7d8196da0", name: "vds-coral-75" },
    { id: "184ba8d219c068fe24838f6df5ec55adc6fec326", name: "vds-coral-50" }
  ],
  pink: [
    { id: "c7031c73e226a29d3cd3855f398be29141238848", name: "vds-pink-500" },
    { id: "c3dd53483617cb62896259197a1dfa3f28710d71", name: "vds-pink-400" }
  ],
  banana: [
    {
      id: "c610993e88d1d3a8ef507638701254dd95805444",
      name: "vds-banana-regular"
    },
    {
      id: "89c8f615c947611492b274897615d37a22a91d7c",
      name: "vds-banana-light"
    },
    {
      id: "70ae4c71b3ec08a6a307154bb43a5834daa0b3c0",
      name: "vds-banana-lighter"
    }
  ],
  mint: [
    {
      id: "304ffa4a13094459f1fc949606bde014e7a454cb",
      name: "vds-mint-regular"
    },
    { id: "a49b8e4ce3d0ad9c607d444f3f04a013e55dfb31", name: "vds-mint-light" },
    {
      id: "c4cc1425ac4b5a3e4d7701bd11ae1abc6a046f0f",
      name: "vds-mint-lighter"
    }
  ],
  cornflower: [
    {
      id: "871115458008fb7a8814b631df5d76d629c37e06",
      name: "vds-cornflower-regular"
    },
    {
      id: "cfd0b8b6b2a30e232e797f0976bef51128a78d1a",
      name: "vds-cornflower-light"
    },
    {
      id: "7ccfa8335568c62aaaa73c733a92df76e43343e3",
      name: "vds-cornflower-lighter"
    }
  ],
  tangerine: [
    {
      id: "5c60f368180283b64232366fd4c210af765b8e19",
      name: "vds-tangerine-regular"
    },
    {
      id: "903db850e3c8dc26fd93fcb1c9db8f3703fa08d4",
      name: "vds-tangerine-light"
    },
    {
      id: "bd5de1371359d2d902cea6fbb38b26378cdba8e2",
      name: "vds-tangerine-lighter"
    }
  ],
  watermelon: [
    {
      id: "623c137a7580472bb14bb32f9b57690e0f03b8fb",
      name: "vds-watermelon-regular"
    },
    {
      id: "f4fb434897ed8a01a8e237a37504d2077db461ef",
      name: "vds-watermelon-light"
    },
    {
      id: "c83b74ea7b346ce9275f0463e3ded7dca6a15d7f",
      name: "vds-watermelon-lighter"
    }
  ],
  plum: [
    {
      id: "1a59e999f30d27d9c556371849f7cb67f46c15fa",
      name: "vds-plum-regular"
    },
    { id: "90408a82e5501d6ca7122bdb6a62b197f9a50239", name: "vds-plum-light" },
    {
      id: "5af8bf5d2ba87071f4651faf854b8c9f180272ef",
      name: "vds-plum-lighter"
    }
  ],
  smoke: [
    {
      id: "cd7ebdce0994572b50a5c537e08107d834346a0a",
      name: "vds-smoke-regular"
    },
    { id: "b8b1392e79895342895a87e935c271ef009a185a", name: "vds-smoke-light" },
    {
      id: "c99bc1f06eaa8252c934f749ec6a1699d1bb96a6",
      name: "vds-smoke-lighter"
    }
  ],
  blueberry: [
    {
      id: "75925a998f2caba6866e4fa81f8976106aadc1d8",
      name: "vds-blueberry-regular"
    },
    {
      id: "86c444193da05ce73648e2d94614a17fc90736e5",
      name: "vds-blueberry-light"
    },
    {
      id: "5a20992c793a2df366f97b311ac762e6ed01ff69",
      name: "vds-blueberry-lighter"
    }
  ],
  text: [
    {
      id: "46780bcc12cd1cfa3bd8f3b8a3c1b101802f6081",
      name: "vds-text-primary-color"
    },
    {
      id: "36204753c92dc47ce437d3bb0126db09cf132819",
      name: "vds-text-secondary-color"
    },
    {
      id: "84b3b97e74456f7382df7d008f67340f798d1beb",
      name: "vds-text-muted-color"
    },
    {
      id: "1b68001cb5e33eb4a2f53227ab3d17adb738a946",
      name: "vds-text-disabled-color"
    },
    {
      id: "18ed0c0f50d2535da8fd0e067d65ac108574e3a1",
      name: "vds-text-title-color"
    },
    {
      id: "cb0bd89e5dd3a820a333864eb022083a9ad81d2a",
      name: "vds-text-icon-muted-color"
    },
    {
      id: "ec29711f54a0f4b160e8af760717eeae935abaad",
      name: "vds-text-primary-light-color"
    },
    {
      id: "bf4894bf9b7c404aec3610207643f9e5d948f7ce",
      name: "vds-text-secondary-light-color"
    }
  ],
  surface: [
    {
      id: "b5a6e3b2530c616d8285b1028eeefc27c7355aaa",
      name: "vds-surface-default"
    },
    {
      id: "c368f2bdc21bc587bb92a356d18ee757043f7d22",
      name: "vds-surface-50"
    },
    {
      id: "9449819f2ea55a55615d45b077d611fb4fe86150",
      name: "vds-surface-75"
    },
    {
      id: "e9a3c49376e14202c7ecdb4c9614323a9395b1fe",
      name: "vds-surface-100"
    },
    {
      id: "4cc3b75bac925e8646538bda3293a342c7dd8bb7",
      name: "vds-surface-200"
    },
    {
      id: "5f1857f573865c52d9f54fbbe209f4176ec42b1e",
      name: "vds-surface-900"
    },
    {
      id: "b3646383d069dcfc2b2eb32be1d0c7ef296e2383",
      name: "vds-surface-mask"
    },
    {
      id: "12ee565342b71e41749da436147e347e1c43ef64",
      name: "vds-surface-focus"
    }
  ],
  "border-color": [
    {
      id: "5fa57aa40f4ff3d0fe7d86dddc5e17b39f2c7dbf",
      name: "vds-border-color-default"
    },
    {
      id: "7db41b23c4277b1642fc2a703f08eddbd13f5a38",
      name: "vds-border-color-300"
    },
    {
      id: "6d3292ada00223b18e72c579a2ac1c3203b8077a",
      name: "vds-border-color-400"
    },
    {
      id: "93ed98ee42ba1f05cdac54c91dce1c50f349ce0e",
      name: "vds-border-color-focus"
    }
  ],
  intent: [
    {
      id: "6ce573b4656577a27b0c6b0d17b999e31dac26d5",
      name: "vds-intent-success-color"
    },
    {
      id: "a0d6b23d06d576b8e50842cbf590d4a5ac55e91f",
      name: "vds-intent-success-color-hover"
    },
    {
      id: "ec0e27342a1de8bbdfc563e45b8b0e5a6f047c13",
      name: "vds-intent-success-icon-fill"
    },
    {
      id: "c12b1e1cc100801517c3375b9630f6cec00d8c72",
      name: "vds-intent-success-surface"
    },
    {
      id: "fd9c25abd823f73fe0d0b7f48e4a78823140b887",
      name: "vds-intent-success-surface-hover"
    },
    {
      id: "1c4c5907ea69bf4eb1700d0a13ebf0820d59d919",
      name: "vds-intent-success-border-color"
    },
    {
      id: "a3a65324c9ae4290270a19297f4f5c1938b1df62",
      name: "vds-intent-success-color-reverse"
    },
    {
      id: "094305c367cd58d29c836e805cf03fb3c1cdcd16",
      name: "vds-intent-success-icon-fill-reverse"
    },
    {
      id: "48a2ab21c0c795c74df89056f4c8c9080d6aedc0",
      name: "vds-intent-success-surface-reverse"
    },
    {
      id: "2015577ddb149c8b085dd4684e573ad955cbdc08",
      name: "vds-intent-success-surface-reverse-hover"
    },
    {
      id: "f66ae203fdf58133d911556b3da4aedc0b73609f",
      name: "vds-intent-success-border-color-reverse"
    },
    {
      id: "2bba6bdfa0ffa3014ae970a79bdebb9565c50b26",
      name: "vds-intent-warning-color"
    },
    {
      id: "2251202b886da4136928cff5c3db583e48fd0051",
      name: "vds-intent-warning-color-hover"
    },
    {
      id: "771b751f7a3b67b0f62afd10066d8d089b8d5e41",
      name: "vds-intent-warning-icon-fill"
    },
    {
      id: "da72b8618855cdc40f3dcefffda9e2c8158c3221",
      name: "vds-intent-warning-surface"
    },
    {
      id: "bfc2739d10c8363eb3fdb79707dc0f738ce7ebd4",
      name: "vds-intent-warning-surface-hover"
    },
    {
      id: "cfcda6c6de289f08acd70482799d5a774c13531d",
      name: "vds-intent-warning-border-color"
    },
    {
      id: "0af7c3b730070d35d7cc03a24f35725c4a25e7c5",
      name: "vds-intent-warning-color-reverse"
    },
    {
      id: "b9b7fe65466901b170ee05064e1ff1c61cc653fd",
      name: "vds-intent-warning-icon-fill-reverse"
    },
    {
      id: "35354aef3a03ea21d5f6c445b25ffa517b163889",
      name: "vds-intent-warning-surface-reverse"
    },
    {
      id: "2e12ceabd0fd447d4e8d13e49e22827a798a24f2",
      name: "vds-intent-warning-surface-reverse-hover"
    },
    {
      id: "08bd844300813922f8ccb210b449a6508dbab7a5",
      name: "vds-intent-warning-border-color-reverse"
    },
    {
      id: "6386c946a79a46819ec91baeb2425543a5cf29ce",
      name: "vds-intent-danger-color"
    },
    {
      id: "9d77a95e8fffe11f1206ecafa7c6b3fad1be2a45",
      name: "vds-intent-danger-color-hover"
    },
    {
      id: "82ee42c594b2aa63b518851c0b38e311ad84b23d",
      name: "vds-intent-danger-icon-fill"
    },
    {
      id: "4e8b0cd6550f333c0853278887b8e0ce8998f403",
      name: "vds-intent-danger-surface"
    },
    {
      id: "c0950834f42ef62bd202ee639684b55b235838d5",
      name: "vds-intent-danger-surface-hover"
    },
    {
      id: "2c3f62d32a43c5531e83c992f5e92324f73f1e1d",
      name: "vds-intent-danger-border-color"
    },
    {
      id: "fa862781ecbd3e366db7230c26837e8512ac08d1",
      name: "vds-intent-danger-color-reverse"
    },
    {
      id: "eeabc00bcc9de162fce3ee3a3d3570a983023aad",
      name: "vds-intent-danger-icon-fill-reverse"
    },
    {
      id: "9ffe91cfdc3d489d40c4a6bea1e6bbcdeff832c7",
      name: "vds-intent-danger-surface-reverse"
    },
    {
      id: "d9bbc2d6dddf6e682dbd82848d4ccec739d96682",
      name: "vds-intent-danger-surface-reverse-hover"
    },
    {
      id: "804aa66b32377f7335f86993ff7a5b0235c92e99",
      name: "vds-intent-danger-border-color-reverse"
    },
    {
      id: "6c160b97cc66cd69510ebc8a65778f809124c502",
      name: "vds-intent-info-color"
    },
    {
      id: "0f33963f078e73e6a6f4c079cb980104003dce3e",
      name: "vds-intent-info-color-hover"
    },
    {
      id: "767bc1aef997f6d21a67a8fda7ee8a72bf5b510f",
      name: "vds-intent-info-icon-fill"
    },
    {
      id: "ed215fc973d198b2638ab76178418097ddc66c3e",
      name: "vds-intent-info-surface"
    },
    {
      id: "e54cc95d765a3b5313f30ffd3d20938b7fb49c02",
      name: "vds-intent-info-surface-hover"
    },
    {
      id: "0de84a8a00c259feefb78df2d7facdbfcc19e77b",
      name: "vds-intent-info-border-color"
    },
    {
      id: "a28c2223a70b05a7a27eec6ae9445b9c47a1a829",
      name: "vds-intent-info-color-reverse"
    },
    {
      id: "e0bf5a15ad86649c112c8eb5abfeca12b79e2af3",
      name: "vds-intent-info-icon-fill-reverse"
    },
    {
      id: "cf1ea0be56ba554cadd31be992c91ecadd930239",
      name: "vds-intent-info-surface-reverse"
    },
    {
      id: "71a1633c9a8a7100fdd56a562bb33fafb2a83f3f",
      name: "vds-intent-info-surface-reverse-hover"
    },
    {
      id: "028e006e6dc2b4f5857bb3469ed0720fb7080fbe",
      name: "vds-intent-info-border-color-reverse"
    },
    {
      id: "5a01d6b76f5dec5ee478529791441af8e82a26aa",
      name: "vds-intent-neutral-color"
    },
    {
      id: "7d276b8fca7bccb21d32741fa2602db47b6f9e3e",
      name: "vds-intent-neutral-color-hover"
    },
    {
      id: "ac6f01e5a8d2b91c8158baa8c6fa47f517193158",
      name: "vds-intent-neutral-icon-fill"
    },
    {
      id: "83350823dcf9cfe8d12218406c9d12445a6a36bb",
      name: "vds-intent-neutral-surface"
    },
    {
      id: "806b280109e4e4eba1cb3802dd8c670280e10c56",
      name: "vds-intent-neutral-surface-hover"
    },
    {
      id: "b8d21aba44cc21aa2859f5c34975a3e2050c65b1",
      name: "vds-intent-neutral-border-color"
    },
    {
      id: "b64b79b59051825046a84b8c677dd73459abffe4",
      name: "vds-intent-neutral-color-reverse"
    },
    {
      id: "21c2ee4090ed9f33329fc3f9f80ba094a2ad2697",
      name: "vds-intent-neutral-icon-fill-reverse"
    },
    {
      id: "29d4a54ffd64896332d8cd4aa217b1c817e3c5c1",
      name: "vds-intent-neutral-surface-reverse"
    },
    {
      id: "baf9ce6132b23ba32543993f0a9b6014b69344fe",
      name: "vds-intent-neutral-surface-reverse-hover"
    },
    {
      id: "3a674312c82aa7d8521106c014910bf2c4118bae",
      name: "vds-intent-neutral-border-color-reverse"
    },
    {
      id: "209f0824bba7c1ecffb2f2cca0e0c6edd3d1c8be",
      name: "vds-intent-polst-surface"
    },
    {
      id: "9d5f80c14f4110c367ce558b8c4cda93a050bd84",
      name: "vds-intent-polst-surface-hover"
    },
    {
      id: "df03b95d66eb6637287801074f2859c6f22a729b",
      name: "vds-intent-polst-color"
    },
    {
      id: "268c99ccb87ff2798a3461c76aacc95e1c36f736",
      name: "vds-intent-dnr-color"
    },
    {
      id: "cb10caa4b49ddc895db81e189a9b466b9d9a4812",
      name: "vds-intent-dnr-surface"
    },
    {
      id: "35d5fae2595f07be919e1f8362170f6ef5934930",
      name: "vds-intent-dnr-surface-hover"
    },
    {
      id: "032356f536134e9f371b27a860fc3f86d1a7d1a4",
      name: "vds-intent-deceased-surface"
    },
    {
      id: "2351a064a584d970a8be472df297ac5aa0353e73",
      name: "vds-intent-deceased-surface-hover"
    },
    {
      id: "7c9dde2a8c39e4d0de4e6bc1d95e33c7c80e8235",
      name: "vds-intent-deceased-color"
    }
  ],
  action: [
    {
      id: "b045a68fcc79b04c5df9fb9f6ba5f16afbdc551f",
      name: "vds-action-link-color"
    },
    {
      id: "ea994815c513bdbddf98fb76302ff535142f4ad3",
      name: "vds-action-link-color-muted"
    },
    {
      id: "e6cfbbf9778973ce9fe93df1406e8a5c44e6545d",
      name: "vds-action-link-color-hover"
    },
    {
      id: "1669c9d4460693499ca4d03d2527e08b3b6d8632",
      name: "vds-action-link-color-active"
    }
  ],
  "floating-toolbar": [
    {
      id: "61da5db3b56ee77f880916443649c676b9d62354",
      name: "vds-floating-toolbar-surface"
    },
    {
      id: "86431b662beefac9b42ab20c581d9a70ea4803c8",
      name: "vds-floating-toolbar-border"
    }
  ]
};

export const categorizedTokens: TokenGroup = {
  surface: [
    {
      id: "b5a6e3b2530c616d8285b1028eeefc27c7355aaa",
      name: "vds-surface-default"
    },
    {
      id: "c368f2bdc21bc587bb92a356d18ee757043f7d22",
      name: "vds-surface-50"
    },
    {
      id: "9449819f2ea55a55615d45b077d611fb4fe86150",
      name: "vds-surface-75"
    },
    {
      id: "e9a3c49376e14202c7ecdb4c9614323a9395b1fe",
      name: "vds-surface-100"
    },
    {
      id: "4cc3b75bac925e8646538bda3293a342c7dd8bb7",
      name: "vds-surface-200"
    },
    {
      id: "5f1857f573865c52d9f54fbbe209f4176ec42b1e",
      name: "vds-surface-900"
    },
    {
      id: "b3646383d069dcfc2b2eb32be1d0c7ef296e2383",
      name: "vds-surface-mask"
    },
    {
      id: "12ee565342b71e41749da436147e347e1c43ef64",
      name: "vds-surface-focus"
    },
    {
      id: "c12b1e1cc100801517c3375b9630f6cec00d8c72",
      name: "vds-intent-success-surface"
    },
    {
      id: "fd9c25abd823f73fe0d0b7f48e4a78823140b887",
      name: "vds-intent-success-surface-hover"
    },
    {
      id: "48a2ab21c0c795c74df89056f4c8c9080d6aedc0",
      name: "vds-intent-success-surface-reverse"
    },
    {
      id: "2015577ddb149c8b085dd4684e573ad955cbdc08",
      name: "vds-intent-success-surface-reverse-hover"
    },
    {
      id: "da72b8618855cdc40f3dcefffda9e2c8158c3221",
      name: "vds-intent-warning-surface"
    },
    {
      id: "bfc2739d10c8363eb3fdb79707dc0f738ce7ebd4",
      name: "vds-intent-warning-surface-hover"
    },
    {
      id: "35354aef3a03ea21d5f6c445b25ffa517b163889",
      name: "vds-intent-warning-surface-reverse"
    },
    {
      id: "2e12ceabd0fd447d4e8d13e49e22827a798a24f2",
      name: "vds-intent-warning-surface-reverse-hover"
    },
    {
      id: "4e8b0cd6550f333c0853278887b8e0ce8998f403",
      name: "vds-intent-danger-surface"
    },
    {
      id: "c0950834f42ef62bd202ee639684b55b235838d5",
      name: "vds-intent-danger-surface-hover"
    },
    {
      id: "9ffe91cfdc3d489d40c4a6bea1e6bbcdeff832c7",
      name: "vds-intent-danger-surface-reverse"
    },
    {
      id: "d9bbc2d6dddf6e682dbd82848d4ccec739d96682",
      name: "vds-intent-danger-surface-reverse-hover"
    },
    {
      id: "ed215fc973d198b2638ab76178418097ddc66c3e",
      name: "vds-intent-info-surface"
    },
    {
      id: "e54cc95d765a3b5313f30ffd3d20938b7fb49c02",
      name: "vds-intent-info-surface-hover"
    },
    {
      id: "cf1ea0be56ba554cadd31be992c91ecadd930239",
      name: "vds-intent-info-surface-reverse"
    },
    {
      id: "71a1633c9a8a7100fdd56a562bb33fafb2a83f3f",
      name: "vds-intent-info-surface-reverse-hover"
    },
    {
      id: "83350823dcf9cfe8d12218406c9d12445a6a36bb",
      name: "vds-intent-neutral-surface"
    },
    {
      id: "806b280109e4e4eba1cb3802dd8c670280e10c56",
      name: "vds-intent-neutral-surface-hover"
    },
    {
      id: "29d4a54ffd64896332d8cd4aa217b1c817e3c5c1",
      name: "vds-intent-neutral-surface-reverse"
    },
    {
      id: "baf9ce6132b23ba32543993f0a9b6014b69344fe",
      name: "vds-intent-neutral-surface-reverse-hover"
    },
    {
      id: "209f0824bba7c1ecffb2f2cca0e0c6edd3d1c8be",
      name: "vds-intent-polst-surface"
    },
    {
      id: "9d5f80c14f4110c367ce558b8c4cda93a050bd84",
      name: "vds-intent-polst-surface-hover"
    },
    {
      id: "cb10caa4b49ddc895db81e189a9b466b9d9a4812",
      name: "vds-intent-dnr-surface"
    },
    {
      id: "35d5fae2595f07be919e1f8362170f6ef5934930",
      name: "vds-intent-dnr-surface-hover"
    },
    {
      id: "032356f536134e9f371b27a860fc3f86d1a7d1a4",
      name: "vds-intent-deceased-surface"
    },
    {
      id: "2351a064a584d970a8be472df297ac5aa0353e73",
      name: "vds-intent-deceased-surface-hover"
    },
    {
      id: "61da5db3b56ee77f880916443649c676b9d62354",
      name: "vds-floating-toolbar-surface"
    }
  ],
  border: [
    {
      id: "5fa57aa40f4ff3d0fe7d86dddc5e17b39f2c7dbf",
      name: "vds-border-color-default"
    },
    {
      id: "7db41b23c4277b1642fc2a703f08eddbd13f5a38",
      name: "vds-border-color-300"
    },
    {
      id: "6d3292ada00223b18e72c579a2ac1c3203b8077a",
      name: "vds-border-color-400"
    },
    {
      id: "93ed98ee42ba1f05cdac54c91dce1c50f349ce0e",
      name: "vds-border-color-focus"
    },
    {
      id: "1c4c5907ea69bf4eb1700d0a13ebf0820d59d919",
      name: "vds-intent-success-border-color"
    },
    {
      id: "f66ae203fdf58133d911556b3da4aedc0b73609f",
      name: "vds-intent-success-border-color-reverse"
    },
    {
      id: "cfcda6c6de289f08acd70482799d5a774c13531d",
      name: "vds-intent-warning-border-color"
    },
    {
      id: "08bd844300813922f8ccb210b449a6508dbab7a5",
      name: "vds-intent-warning-border-color-reverse"
    },
    {
      id: "2c3f62d32a43c5531e83c992f5e92324f73f1e1d",
      name: "vds-intent-danger-border-color"
    },
    {
      id: "804aa66b32377f7335f86993ff7a5b0235c92e99",
      name: "vds-intent-danger-border-color-reverse"
    },
    {
      id: "0de84a8a00c259feefb78df2d7facdbfcc19e77b",
      name: "vds-intent-info-border-color"
    },
    {
      id: "028e006e6dc2b4f5857bb3469ed0720fb7080fbe",
      name: "vds-intent-info-border-color-reverse"
    },
    {
      id: "b8d21aba44cc21aa2859f5c34975a3e2050c65b1",
      name: "vds-intent-neutral-border-color"
    },
    {
      id: "3a674312c82aa7d8521106c014910bf2c4118bae",
      name: "vds-intent-neutral-border-color-reverse"
    },
    {
      id: "86431b662beefac9b42ab20c581d9a70ea4803c8",
      name: "vds-floating-toolbar-border"
    }
  ]
};

export const deprecatedColorTokens: ReadonlyArray<Token> = [
  { id: "ce6307a13a605ffa786802931ccb2d77c47c5894", name: "vds-black" },
  { id: "2bf10ebd73ce70b417cfe46e1580c2f5825e5651", name: "vds-white" },
  { id: "f32f141e59887451a82944f582d576449c4e6581", name: "vds-off-white" },
  { id: "286a78c0e90bcf7455fdca653b622bd0723ce686", name: "vds-comments" },
  { id: "29a861b7af762df2f566672690042fc34ba657f8", name: "vds-dark-gray1" },
  { id: "09a3a237180dc9d28a1d7c70d72147f96a25a5b4", name: "vds-dark-gray2" },
  { id: "510940080bdc0f514a4622d1008815552e07bc60", name: "vds-dark-gray3" },
  { id: "288743416be0591593597963ba0e6e04bc278a13", name: "vds-dark-gray4" },
  { id: "91fe67fc4792fd037bfb5b76acd7c15d38ab51c5", name: "vds-dark-gray5" },
  { id: "7a7d9188eecd5ca29f6d425257cfa7c7807c6211", name: "vds-mid-gray1" },
  { id: "af7121e773f7038df6f13a6461ce700958ddf4fc", name: "vds-mid-gray2" },
  { id: "3cf87d92b7112ee67810d9292e47cfdcd239ade6", name: "vds-mid-gray3" },
  { id: "496a464d3ba80d86f8ad7645387be87b096c7443", name: "vds-mid-gray4" },
  { id: "2be0ced4e7fd5d7479283721b0509aff5f9236e6", name: "vds-mid-gray5" },
  { id: "18ae1c116c6726bdffa090d4b77d42f6d0bbe3eb", name: "vds-light-gray1" },
  { id: "f680d5a6d8470c5ea1ea5d4303a1c8861914bb78", name: "vds-light-gray2" },
  { id: "c345e638f1ab641f0c7d3eb45e95f7dcbc235384", name: "vds-light-gray3" },
  { id: "eb5fe46cc0c6cee15aa1a5a4f82a82d4d98717e4", name: "vds-light-gray4" },
  { id: "f7981c6de85ae8989ac375088e8d0fa64d8f44b7", name: "vds-light-gray5" },
  { id: "5ea76a16644ae2537de80584baed2a5ea139bc9e", name: "vds-elation-blue" },
  { id: "759cc982fe1d2b061bf9eea70069552e50767f61", name: "vds-mid-blue" },
  { id: "155a4ce251f3f7c9944979e1bab518ae11451d0b", name: "vds-deep-blue" },
  {
    id: "4066a62f0606f7c94a8af67f032f36799f4a031b",
    name: "vds-elation-orange"
  },
  { id: "ef7978396db51e7b8d538000ea29ee6b3a0cf420", name: "vds-mid-orange" },
  { id: "8c4e40eb6de604461845574cb53a9e89d4b8120a", name: "vds-deep-orange" },
  { id: "6fbc54f2ef605705f605c27c4616a25f4f9d117b", name: "vds-green" },
  { id: "539250a9680a0092096ba0de7adab84e7faa0518", name: "vds-yellow" },
  { id: "dabc093c84c0c87e91d705222f137803ffa13b67", name: "vds-red" },
  { id: "d3fc4397b0378d23d32412eeb99a362d626118c7", name: "vds-mid-red" },
  { id: "7e5964c3cc58c349ecd71eafe09ef15dc0db2bab", name: "vds-deep-red" },
  { id: "891c56b8fe24f1f93112f7e7869856145f375129", name: "vds-light-red" },
  {
    id: "01b447775f63225b426e5f812f92124277e0281f",
    name: "vds-turquoise-dark"
  },
  {
    id: "339929c06100bbdfd53c913e6c5a1e00907b268a",
    name: "vds-turquoise-light"
  },
  { id: "166a769d01920e3a8e4398faed656a27083b756e", name: "vds-lily-dark" },
  { id: "cbd834ee47320e7f9d467705f30f1f50e54fe798", name: "vds-lily-light" },
  { id: "e7d4cd54669728851c4076d6304d86afd5f53d29", name: "vds-leather-dark" },
  { id: "fdfa790fa12c20b207d09b63b24b4610b99157f0", name: "vds-leather-light" },
  {
    id: "c7723ba98bc1a3f135fab17b94d76c915f9d70d3",
    name: "vds-periwinkle-dark"
  },
  {
    id: "6720d8545372e2d5f053c42c72721167798e15cb",
    name: "vds-periwinkle-light"
  },
  { id: "7157dd0a75109f3529fa00d62033e76871884cc6", name: "vds-carrot-dark" },
  { id: "959b5e04016f20e5c76d2dac78208f94c9a71d46", name: "vds-carrot-light" },
  { id: "88592e0cce2c36c7bf12c2fb6823e2519bc74638", name: "vds-lavender-dark" },
  {
    id: "0ea6b1d095438d13310ea71dd226ff733bb376ff",
    name: "vds-lavender-light"
  },
  { id: "cf2a2d3502c69eb5412003e4a75eb51109d7fe71", name: "vds-pink-dark" },
  { id: "1858795a1891d98f75aef9c64909aa45f219caaf", name: "vds-pink-light" },
  { id: "1abeed349c4eb33f772785c4537edad67520be51", name: "vds-amber-dark" },
  { id: "75e91a56ec91c0b2e27e6d6a91975e17971d2fb6", name: "vds-amber-light" },
  { id: "82dee58bd4cc49378b474031cc922b93a6a45ccf", name: "vds-aqua-dark" },
  { id: "669f5e3353f9d331cb84ef4f98c0a0bed5121a1c", name: "vds-aqua-light" },
  { id: "e2e8058e64cf000b68668cc1b11909efef2d1316", name: "vds-olive-dark" },
  { id: "fe2deff531d03df848e032f89039eb271e9d4e9e", name: "vds-olive-light" },
  {
    id: "ef91be3161fce15e54a24f31f7b65e4495ef8234",
    name: "vds-coral-olivine-accent"
  },
  {
    id: "c58d630d8a1b0efc747a8c534ea5267d9dbfd8f4",
    name: "vds-elation-blue-olivine-accent"
  },
  {
    id: "6b4ac3f052f54435b8c39cd4446ec7a149fe5d5a",
    name: "vds-navy-olivine-text"
  },
  {
    id: "c98bdd78f5ab9575e45b1e00df4c49657d1f2002",
    name: "vds-white-olivine-text-bg"
  },
  {
    id: "ee14e45cb916e18a379ab59f35ba458459ad6a15",
    name: "vds-grey-olivine-text"
  },
  {
    id: "7b841a35894253ff6514fe837900c02c30ff8d3c",
    name: "vds-cloud-blue-olivine-bg"
  },
  {
    id: "d151fc348845e3bc75636367de731892509168d0",
    name: "vds-warm-yellow-olivine-bg"
  },
  {
    id: "f29e0b46e14f9591ebc5845710c111e225e62421",
    name: "vds-light-elation-blue-olivine-bg"
  },
  {
    id: "b94c6da358ffb7b4e148207cb714e01286f877e7",
    name: "vds-dark-spruce-olivine-bg"
  },
  {
    id: "79f186db6a3643071f56bc04a88faeb3864899da",
    name: "vds-med-elation-blue-olivine-icons"
  },
  {
    id: "2ac628eb386962dfbf557838e2fe0906a64e20f0",
    name: "vds-medium-coral-olivine-icons"
  },
  {
    id: "f6af263850b6df8038f32c9378004bfae4c97646",
    name: "vds-dusty-navy-olivine-icons"
  },
  {
    id: "a27b07f078d2dfc4aee45395bb6d9e7f2c931640",
    name: "vds-light-grey-olivine-icons"
  },
  {
    id: "c8b0225347549bda272525d58e61c76bd7b6f6dd",
    name: "vds-coral-accessible"
  },
  { id: "0426143e86d03fbb99435758c6e22fb35b2a755d", name: "vds-comments" },
  {
    id: "6fe91ae479eb16889173d1d001c4a998f53979d1",
    name: "vds-elation-blue"
  },
  { id: "254c2069d90281d0d6dc8fdc1b0b9c6705422b65", name: "vds-mid-blue" },
  { id: "2f45b6211ee436974b5111c71cdd6e3f53c5f459", name: "vds-deep-blue" },
  { id: "ce737f150efbad37be298a3e4e055da3fae0e70a", name: "vds-orange" },
  {
    id: "02b50ee0c22cd0ddcf9509f05415d6d158437deb",
    name: "vds-mid-orange"
  },
  {
    id: "2324ed60be3a82c21612215467aa945433acdff1",
    name: "vds-deep-orange"
  },
  { id: "8f6361c057804684edd868dc213d8296fbc68a1c", name: "vds-black" },
  { id: "5d1f7b1b37658031bea9a5748c30a75e8bb3233f", name: "vds-white" },
  { id: "0e8fc74eed57b23722de43457324eb6dac039eec", name: "vds-off-white" },
  { id: "6c9bee11a0aa3061ba2d05227d6e79b8be075987", name: "vds-green" },
  { id: "08ea1eef1b0c3a0c5118c657f988d8ec77c19548", name: "vds-yellow" },
  { id: "e14789bf1c8dc5246123ab5f71f937cd582ca706", name: "vds-red" },
  { id: "5c7424945a32691cb938a82160b5832e8798bebf", name: "vds-mid-red" },
  { id: "2b39a209ca389f8572b3bc33c7d1f781092477a4", name: "vds-dark-red" },
  { id: "c5d9b104b82d9dab2483eb2acff2f02f3d2e7e74", name: "vds-light-red" },
  {
    id: "24df8ed78e2b24241ae47d7cd2150abeae3f15c0",
    name: "vds-dark-gray1"
  },
  {
    id: "2277fed95dce5f4e4b627bea75e9c6f0f07d928c",
    name: "vds-dark-gray2"
  },
  {
    id: "b63aba861ff253adc328396f33c7a07a1709c805",
    name: "vds-dark-gray3"
  },
  {
    id: "9203a1eae0316f9dcebaf25860dbdfe58f890992",
    name: "vds-dark-gray4"
  },
  {
    id: "9ece784b04a34d0168771132a396ea1a2ab5d4f7",
    name: "vds-dark-gray5"
  },
  { id: "ed4d2d264a1de6ca720181c8624d51e7e0da2759", name: "vds-mid-gray1" },
  { id: "f094d14bb92b32b8d8a73556cd4050d25f67e900", name: "vds-mid-gray2" },
  { id: "71223d93c7b1135adadbfb2b60facd187661fba0", name: "vds-mid-gray3" },
  { id: "2027b113a62fe075533161a50536c3da5249125e", name: "vds-mid-gray4" },
  { id: "5189537757544d9850dcc7e0875ad80d51c6f5f7", name: "vds-mid-gray5" },
  {
    id: "3ce5318878800304a3bfc333b9601702fe3b4e2a",
    name: "vds-light-gray1"
  },
  {
    id: "fe34c28c54a09a2ede275aa183d2ac5470c388b8",
    name: "vds-light-gray2"
  },
  {
    id: "20934441ec97cb9226e79872a632afa2cab05b96",
    name: "vds-light-gray3"
  },
  {
    id: "f45c4c54ca16099cbe15e929c62536eefe367e7d",
    name: "vds-light-gray4"
  },
  {
    id: "f8383687062b62d4907f695959024fafac80a5f6",
    name: "vds-light-gray5"
  },
  {
    id: "8c4b0e6985c609d6bebda8f7e5d1ec991d57d9d4",
    name: "vds-turquoise-dark"
  },
  {
    id: "334db1b82ef3d19028eb2edf214ae9285ac1aabf",
    name: "vds-turquoise-light"
  },
  { id: "1f663c54dc8c2599c99d03ff344a2db59773e124", name: "vds-lily-dark" },
  {
    id: "c20c7b2631bc13a59f903c355b9cc4acd5172de3",
    name: "vds-lily-light"
  },
  {
    id: "88586021026c1fcb39a97e48cf3d8b6872c8183d",
    name: "vds-leather-dark"
  },
  {
    id: "5932f62ad183bf85c276ed0f866acbc82dd6c42d",
    name: "vds-leather-light"
  },
  {
    id: "29d580e7c8087f022181a15a5203aa892085f62d",
    name: "vds-periwinkle-dark"
  },
  {
    id: "7a4fb90fe0edd0888f4a68feb72608acbaa1efbb",
    name: "vds-periwinkle-light"
  },
  {
    id: "a6bbff05cf310f4034de9050c300f16e0d9f50cb",
    name: "vds-carrot-dark"
  },
  {
    id: "c85948baf1017cfa690dc0119f7bc9695d58078f",
    name: "vds-carrot-light"
  },
  {
    id: "ecd70e51717f9cf391113ffa24b2577360f93992",
    name: "vds-lavender-dark"
  },
  {
    id: "a6120fe46cb4e2454e206ff11073bfdd8727ced2",
    name: "vds-lavender-light"
  },
  { id: "c5e79158fd9899de4e5a57563457b9a0e34d36ea", name: "vds-pink-dark" },
  {
    id: "9e1aa93a86d3abe514da26ac5217334bbd979ccb",
    name: "vds-pink-light"
  },
  {
    id: "94d4b777263dedc488d634ae2d4c2d0da07ccd0d",
    name: "vds-amber-dark"
  },
  {
    id: "347f5117eb488397ac291a305013843d9d307ebe",
    name: "vds-amber-light"
  },
  { id: "b9b2f2b2b7bc1e025436d5127fe2e49d54112925", name: "vds-aqua-dark" },
  {
    id: "2a968601b68e337a035480e24a5a1ed91d35d0da",
    name: "vds-aqua-light"
  },
  {
    id: "27d1166a51c95223abf7beca0caa2de02a48ff83",
    name: "vds-olive-dark"
  },
  {
    id: "4c19b2c92222a02791e5cf07e27f6c6b438d14c7",
    name: "vds-olive-light"
  },
  {
    id: "662683120c2ed90c4e9461f0fc434362b0fd8cad",
    name: "vds-test-color-style"
  }
];
