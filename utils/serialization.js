import CryptoJS from "crypto-js";

async function hashSerializedData(serializedData) {
  var hash = CryptoJS.SHA256(serializedData);
  var hashHex = hash.toString(CryptoJS.enc.Hex);
  console.log(hashHex);
}

// function serialize(documentStructure) {
//   if (!(data instanceof Object)) {
//     return `"${documentStructure}"`;
//   } else {
//     let serializedString = "";

//     if (!Array.isArray(documentStructure)) {
//       for (const key in documentStructure) {
//         if (documentStructure.hasOwnProperty(key)) {
//           serializedString += `"${key.toUpperCase()}"`;
//           serializedString += serialize(documentStructure[key]);
//         }
//       }
//     } else {
//       for (let i = 0; i < documentStructure.length; i++) {
//         const obj = documentStructure[i];
//         for (const key in obj) {
//           if (obj.hasOwnProperty(key)) {
//             serializedString += `"${key.toUpperCase()}"`;
//             serializedString += serialize(obj[key]);
//           }
//         }
//       }
//     }
//     return serializedString;
//   }
// }
const serialize = (data) => {
  if (!(data instanceof Object)) {
    return `"${data}"`;
  }
  let serlializedString = "";
  for (const index in data) {
    const element = data[index];
    if (!Array.isArray(element)) {
      serlializedString = serlializedString + `"${index.toUpperCase()}"`;
      serlializedString = serlializedString + `${serialize(element)}`;
    }
    if (Array.isArray(element)) {
      serlializedString = serlializedString + `"${index.toUpperCase()}"`;
      for (const arrayElement of element) {
        serlializedString = serlializedString + `"${index.toUpperCase()}"`;
        serlializedString = serlializedString + `${serialize(arrayElement)}`;
      }
    }
  }
  return serlializedString;
};
hashSerializedData(
  serialize(  {
    "header": {
        "dateTimeIssued": "2024-03-03T00:12:00Z",
        "receiptNumber": "6",
        "uuid": "",
        "previousUUID": "",
        "referenceOldUUID": "",
        "currency": "EGP",
        "exchangeRate": 0,
        "sOrderNameCode": "sOrderNameCode",
        "orderdeliveryMode": "",
        "grossWeight": 6.58,
        "netWeight": 6.89
    },
    "documentType": {
        "receiptType": "S",
        "typeVersion": "1.2"
    },
    "seller": {
        "rin": "332573516",
        "companyTradeName": "شركه مستشفي الاسكندريه للكلي و المسالك البوليه",
        "branchCode": "0",
        "branchAddress": {
            "country": "EG",
            "governate": "alexandria",
            "regionCity": "city center",
            "street": "16 street",
            "buildingNumber": "14BN",
            "postalCode": "74235",
            "floor": "1F",
            "room": "3R",
            "landmark": "tahrir square",
            "additionalInformation": "talaat harb street"
        },
        "deviceSerialNumber": "ERP-TEST",
        "syndicateLicenseNumber": "1000056",
        "activityCode": "8610"
    },
    "buyer": {
        "type": "F",
        "id": "313717919",
        "name": "taxpayer 1",
        "mobileNumber": "+201020567462",
        "paymentNumber": "987654"
    },
    "itemData": [
        {
            "internalCode": "880609",
            "description": "Samsung A02 32GB_LTE_BLACK_DS_SM-A022FZKDMEB_A022 _ A022_SM-A022FZKDMEB",
            "itemType": "GS1",
            "itemCode": "037000401629",
            "unitType": "EA",
            "quantity": 35,
            "unitPrice": 1,
            "netSale": 35,
            "totalSale": 35,
            "total": 35
        }
    ],
    "totalSales": 35,
   
    "netAmount": 35,
    "totalAmount": 35,
  
    "paymentMethod": "C"
   
})
);
