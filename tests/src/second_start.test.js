import { processSecondStartTest } from './test.fixture';

const pluginName = "ricochet";
const transactionUploadDelay = 5000;
const signedPlugin = false;
const testNetwork = "polygon";


const devices = [
    {
        name: "nanos",
        label: "Nano S",
        steps: 8, // <= Define the number of steps for this test case and this device
    },
    // {
    //   name: "nanox",
    //   label: "Nano X",
    //   steps: 5, // <= Define the number of steps for this test case and this device
    // },
];
var contractAddrs = {
    // "DAIx-ETHx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000001305f6b6df9dc47159d12eb7ac2804d4a33173c20000000000000000000000009bef427fa1ff5269b824eed9415f7622b81244f500000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "ETHx-DAIx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a6200000000000000000000000027e1e4e6bc79d93032abef01025811b7e4727e850000000000000000000000000a70fbb45bc8c70fb94d8678b92686bb69dea3c300000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "USDCx-WBTCx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3000000000000000000000000e0a0ec8dee2f73943a6b731a2e11484916f45d4400000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "WBTCx-USDCx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e300000000000000000000000071f649eb05aa48cf8d92328d1c486b7d9fdbff6b00000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "USDCx-ETHx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e30000000000000000000000008082ab2f4e220dad92689f3682f3e7a42b206b4200000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "ETHx-USDCx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e30000000000000000000000003941e2e89f7047e0ac7b9cce18fbe90927a3210000000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "USDCx-MATICx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3000000000000000000000000e093d8a4269ce5c91cd9389a0646badab2c8d9a300000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "MATICx-USDCx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e300000000000000000000000093d2d0812c9856141b080e9ef6e97c7a7b342d7f00000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "DAIx-MATICx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000001305f6b6df9dc47159d12eb7ac2804d4a33173c2000000000000000000000000a152715df800db5926598917a6ef3702308bcb7e00000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "MATICx-DAIx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a462fc305e0000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3000000000000000000000000250efbb94de68dd165bd6c98e804e08153eb91c6000000000000000000000000000000000000000000000000000001c122187b4f00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "USDCx-MKRx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3000000000000000000000000c89583fa7b84d81fe54c1339ce3feb10de8b4c9600000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "MKRx-USDCx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3000000000000000000000000dc19ed26ad3a544e729b72b50b518a231cbad9ab00000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "DAIx-MKRx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e300000000000000000000000047de4fd666373ca4a793e2e0e7f995ea7d3c9a2900000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "MKRx-DAIx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e300000000000000000000000094e5b18309066dd1e5ae97628afc9d4d7eb5816100000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    // "USDCx-IDLEx": "0x39255d5b0000000000000000000000006eee6060f715257b970700bc2656de21dedf074c0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000a450209a620000000000000000000000003ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3000000000000000000000000be79a6fd39a8e8b0ff7e1af1ea6e26469968058400000000000000000000000000000000000000000000000000000059d39e7f100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
};

for (var key in contractAddrs) {
    devices.forEach((device) =>
        processSecondStartTest(device, pluginName, transactionUploadDelay, key, contractAddrs, signedPlugin, testNetwork)
    );
};