import { httpApiMock } from './http.api.mock';

httpApiMock.onGet('artworks').reply((config) => {
  console.log('config', config)
  return [
    200,
    JSON.parse(
      `{"status":"ok","value":[{"FrameType":[false,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[null],"FramePrice":[null],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":[""],"FrameCostPrice":[null],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"63072bc14ce5b40a793c7d4d","ArtworkID":"63072bc14ce5b40a793c7d4d","Proxy":"也趣藝廊","Playtime":"","cDescription":"","eDescription":"","FrameDescription":"","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":null,"Debit":null,"__v":0,"author":[{"_id":"63072bc14ce5b40a793c7d4e","name":"華建强","cName":"華建强","eName":"Chien Chiang Hua","ID":"CCH001","exID":"5db7bb3120333f127a8e463e","__v":0,"ArtworkID":"63072bc14ce5b40a793c7d4d","AuthorID":"5db7bb3120333f127a8e4641"}],"artwork2invoice":{"_id":"63301565aaef4b0a97de8f42","ArtworkID":"63072bc14ce5b40a793c7d4d","InvoiceID":"63301565aaef4b0a97de8f41","InvoiceType":"INV","ItemType":"Artwork","Index":0,"__v":0},"invoice":[{"Date":{"year":2022,"month":9,"day":25},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"Location":["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],"_id":"63301565aaef4b0a97de8f41","Num":"INV220925-01","Undertaker":"王詩婷 Justina","Contact_Name":"","Address":"","Phone":"","Vender":null,"etc":"","Status":0,"__v":0}],"Size":[72.5,91,null,0],"FrameSize":[null,null,null,0],"Currency":[0],"Type":"繪畫","cName":"精神耗弱的夜晚 04","eName":"Tiredness in the night 04","Num":"","cMaterials":"墨、白墨液、蔥線、釘針、貼紙、蠟筆、膠彩、壓克力、畫布 White","eMaterials":"White Ink、Sticker、Staple、Gouache and Acrylic on Canvas","Age":2021,"Edition":"","Asset_Type":"","StockStatus":"1","Warehouse":0,"Location":"-","SaleStatus":"0","Guarantee_Num":"","IsForSale":true,"Image":"/Image/c4882fc0-244b-11ed-b32e-3f5409a8a5ef.png"},{"FrameType":[false,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[330000],"FramePrice":[null],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":["龍門"],"FrameCostPrice":[2600],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85be70af97851e55edd61b","ArtworkID":"5d85be70af97851e55edd61b","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":119,"Debit":null,"__v":0,"author":[{"_id":"5dc396a73e06c4299573fa4d","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85be70af97851e55edd61b","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb6af97851e55edd66b","ArtworkID":"5d85be70af97851e55edd61b","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":0,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2020,"month":4,"day":23},"Price":[0,1],"Quote":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"_id":"5ea133af3918af1cceda47ad","Num":"QUT200423-01","Undertaker":"林莉蓉 Lily","Contact_Name":"","etc":"Anna Bittersol","Status":0,"__v":0},{"Date":{"year":2020,"month":5,"day":26},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],"Location":["-","-","-","G","-","-","-","-","-","-","-","-","G","-","-","-"],"_id":"5eca321c36619e5943838825","Num":"RTN200526-01","Undertaker":"張加茵","Contact_Name":"Anna Bittersohl","Address":"Spinnereistr. 7, 04179 Leipzig, GERMANY","Phone":"+49 (0)151 14476695","Vender":"TNT","etc":"Work Return","Status":0,"__v":0}],"Size":[170,140,null,0],"FrameSize":[null,null,null,0],"Currency":[0],"Type":"繪畫","cName":"Die Andere Seite","eName":"Die Andere Seite","Num":"AB001/17/002","Image":"/Image/46f46fc0-dc36-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、畫布","eMaterials":"Oil on canvas","Age":2017,"Edition":"","Asset_Type":"","StockStatus":"2","Warehouse":0,"Location":"-","SaleStatus":"0","Guarantee_Num":"","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[49000],"FramePrice":[49000,49000],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":[""],"FrameCostPrice":[null],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85c4bcaf97851e55edd633","ArtworkID":"5d85c4bcaf97851e55edd633","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":4,"Debit":null,"__v":0,"author":[{"_id":"5de0b1f3e234c14f92ea3aae","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85c4bcaf97851e55edd633","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb6af97851e55edd673","ArtworkID":"5d85c4bcaf97851e55edd633","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":14,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2019,"month":9,"day":29},"Deposit_Date":null,"Receipt_Date":{"year":2019,"month":10,"day":5},"Exchange":[0,1],"Tax":[0,0],"InvoiceType":["請選擇"],"Invoice_Num":[""],"Freight":[0,null],"Deposit":[0,null],"Receipt":[0,0],"Percent":[null,null,null],"Discount":[null,null,null],"Turnover":[0,0,0],"_id":"5dd763faaee439615b3575fb","Num":"ORD190929-01","Undertaker":"AKIGallery","Clinet_Name":"簡婕妮","Address":"台北市大安區和平東路一段188巷1號8樓（潤泰禮仁","Phone":" 0952-525-321","is_Tax":true,"Invoice_Date":[],"is_Freight":false,"Deposit_Type":"請選擇","Receipt_Type":"公司合庫","Deadline":"","etc":"","__v":0,"Status":null},{"Date":{"year":2019,"month":11,"day":23},"Price":[0,null],"LastWarehouse":[0,0,0],"LastLocation":[null,null,null],"AnnexArtwork":[true,true,true],"AnnexGuarantee":[true,true,true],"AnnexCard":[true,true,true],"GuaranteeNum":["0300799506","0300799539","0300799571"],"_id":"5dd7ece8aee439615b357847","Num":"DEL191123-02","Undertaker":"AKIGallery","Contact_Name":"簡婕妮","Address":"台北市大安區和平東路一段188巷1號8樓（潤泰禮仁","Phone":" 0952-525-321","Vender":"客人親取","etc":"","Status":1,"__v":0}],"Size":[30,25,null,0],"FrameSize":[null,null,null,0],"Currency":[0],"Type":"繪畫","cName":"Kugel und Stab","eName":"Kugel und Stab","Num":"AB001/17/004","Image":"/Image/07549b70-dc3a-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、木板","eMaterials":"Oil on wood","Age":2017,"Edition":"","Asset_Type":"","StockStatus":"5","Warehouse":null,"Location":null,"SaleStatus":"1","Guarantee_Num":"0300799539","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[60000],"FramePrice":[60000,2000],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":[""],"FrameCostPrice":[null],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85f537af97851e55edd63f","ArtworkID":"5d85f537af97851e55edd63f","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":4,"Debit":null,"__v":0,"author":[{"_id":"5dd7627faee439615b3575e3","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85f537af97851e55edd63f","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb6af97851e55edd676","ArtworkID":"5d85f537af97851e55edd63f","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":20,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2019,"month":10,"day":22},"Deposit_Date":null,"Receipt_Date":{"year":2019,"month":10,"day":29},"Exchange":[1,30],"Tax":[0,null],"InvoiceType":["請選擇"],"Invoice_Num":[""],"Freight":[0,0],"Deposit":[0,null],"Receipt":[0,200],"Percent":[null],"Discount":[null],"Turnover":[0],"_id":"5dc0f1c39ba9e3511772b536","Num":"ORD190926-01","Undertaker":"AKIGallery","Clinet_Name":"Christian Müller","Address":"Bärenmatte 15 3110 Bern, Münsingen, Switzerland","Phone":"","is_Tax":false,"Invoice_Date":[],"is_Freight":true,"Deposit_Type":"請選擇","Receipt_Type":"公司合庫","Deadline":"","etc":"","__v":0,"Status":null},{"Date":{"year":2019,"month":11,"day":5},"Price":[0,3283],"LastWarehouse":[0],"LastLocation":[null],"AnnexArtwork":[true],"AnnexGuarantee":[true],"AnnexCard":[true],"GuaranteeNum":["0300799551"],"_id":"5dc0f4db9ba9e3511772b541","Num":"DEL191105-02","Undertaker":"加茵","Contact_Name":"Christian Müller","Address":"Bärenmatte 15 3110 Bern, Münsingen, Switzerland","Phone":"","Vender":"TNT","etc":"","Status":1,"__v":0}],"Size":[30,25,null,0],"FrameSize":[null,null,null,0],"Currency":[0],"Type":"繪畫","cName":"Stecknadel","eName":"Stecknadel","Num":"AB001/17/005","Image":"/Image/ecd2b1c0-dc56-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、木板","eMaterials":"Oil on wood","Age":2017,"Edition":"","Asset_Type":"","StockStatus":"5","Warehouse":null,"Location":null,"SaleStatus":"1","Guarantee_Num":"0300799551","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[345000],"FramePrice":[null],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":["龍門"],"FrameCostPrice":[2600],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85f965af97851e55edd64e","ArtworkID":"5d85f965af97851e55edd64e","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":119,"Debit":null,"__v":0,"author":[{"_id":"5dc3967b3e06c4299573fa4c","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85f965af97851e55edd64e","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb7af97851e55edd67b","ArtworkID":"5d85f965af97851e55edd64e","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":33,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2020,"month":4,"day":23},"Price":[0,1],"Quote":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"_id":"5ea133af3918af1cceda47ad","Num":"QUT200423-01","Undertaker":"林莉蓉 Lily","Contact_Name":"","etc":"Anna Bittersol","Status":0,"__v":0},{"Date":{"year":2020,"month":5,"day":26},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],"Location":["-","-","-","G","-","-","-","-","-","-","-","-","G","-","-","-"],"_id":"5eca321c36619e5943838825","Num":"RTN200526-01","Undertaker":"張加茵","Contact_Name":"Anna Bittersohl","Address":"Spinnereistr. 7, 04179 Leipzig, GERMANY","Phone":"+49 (0)151 14476695","Vender":"TNT","etc":"Work Return","Status":0,"__v":0}],"Size":[170,140,null,0],"FrameSize":[null,null,null,0],"Currency":[0],"Type":"繪畫","cName":"Wiederkehr","eName":"Wiederkehr","Num":"AB001/17/006","Image":"/Image/6ac75840-dc59-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、畫布","eMaterials":"Oil on canvas","Age":2017,"Edition":"","Asset_Type":"","StockStatus":"2","Warehouse":0,"Location":"-","SaleStatus":"0","Guarantee_Num":"","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[100000],"FramePrice":[100000,3400],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":["龍門"],"FrameCostPrice":[300],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85c2cdaf97851e55edd627","ArtworkID":"5d85c2cdaf97851e55edd627","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":10,"Debit":null,"__v":0,"author":[{"_id":"5e182092632d0e34a758e98f","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85c2cdaf97851e55edd627","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb6af97851e55edd66f","ArtworkID":"5d85c2cdaf97851e55edd627","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":9,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2019,"month":9,"day":4},"Price":[0,null],"Warehouse":[4,4,1,3],"Location":["G","G","B","-"],"LastWarehouse":[4,4,4,4],"LastLocation":["--","--","--","--"],"_id":"5e75e12eead2211e668fa649","Num":"ALO190904-22","Undertaker":"展務助手","Vender":"","etc":"Anna Bittersohl倉儲清點","Status":0,"__v":0},{"Date":{"year":2020,"month":4,"day":23},"Price":[0,1],"Quote":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"_id":"5ea133af3918af1cceda47ad","Num":"QUT200423-01","Undertaker":"林莉蓉 Lily","Contact_Name":"","etc":"Anna Bittersol","Status":0,"__v":0},{"Date":{"year":2020,"month":5,"day":26},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],"Location":["-","-","-","G","-","-","-","-","-","-","-","-","G","-","-","-"],"_id":"5eca321c36619e5943838825","Num":"RTN200526-01","Undertaker":"張加茵","Contact_Name":"Anna Bittersohl","Address":"Spinnereistr. 7, 04179 Leipzig, GERMANY","Phone":"+49 (0)151 14476695","Vender":"TNT","etc":"Work Return","Status":0,"__v":0}],"Size":[50,40,null,0],"FrameSize":[null,null,null,0],"Currency":[0,1],"Type":"繪畫","cName":"Helm","eName":"Helm","Num":"AB001/17/007","Image":"/Image/e07d5420-dc38-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、畫布","eMaterials":"Oil on canvas","Age":2017,"Edition":"","Asset_Type":"","StockStatus":"2","Warehouse":0,"Location":"G","SaleStatus":"0","Guarantee_Num":"","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[null],"FramePrice":[null],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":[""],"FrameCostPrice":[null],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5dd76184aee439615b3575d5","ArtworkID":"5dd76184aee439615b3575d5","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and","FrameDescription":"無裝裱","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":null,"Debit":null,"__v":0,"author":[{"_id":"5de0b75f070f300843e4c9d4","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5dd76184aee439615b3575d5","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5de9c4488fe5f448414a1d0a","ArtworkID":"5dd76184aee439615b3575d5","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":35,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2019,"month":9,"day":4},"Price":[0,null],"Warehouse":[4,4,1,3],"Location":["G","G","B","-"],"LastWarehouse":[4,4,4,4],"LastLocation":["--","--","--","--"],"_id":"5e75e12eead2211e668fa649","Num":"ALO190904-22","Undertaker":"展務助手","Vender":"","etc":"Anna Bittersohl倉儲清點","Status":0,"__v":0},{"Date":{"year":2020,"month":4,"day":23},"Price":[0,1],"Quote":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"_id":"5ea133af3918af1cceda47ad","Num":"QUT200423-01","Undertaker":"林莉蓉 Lily","Contact_Name":"","etc":"Anna Bittersol","Status":0,"__v":0},{"Date":{"year":2022,"month":5,"day":7},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"Location":["C","C","C","F","A","B","G","D"," A","E","-","-","-","-","-","B","D","B","B","J","J","J","B","B","D","D","A","A","A","A","A","A","A","A","B","B","A","B","B","D","D","D","C","D","D","D","D","D","E","E"],"LastWarehouse":[0,0,0,0,0,0,0,0,0,0,3,2,1,1,null,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,4,0,1,0,2,5,4,1,4,2,2,2,2],"LastLocation":["中桌右邊","中桌右邊","中桌右邊","E","B","C","L","鐵架2-3前","F","C","-","-","AD","E","-","D","-","-","-","-","-","-","C","D","VIP","E","A","A","A","C","A","C","C","C","C","C","-","B","D","F","D","-","-","VIP","H","VIP","右手邊","右手邊","右手邊","右手邊"],"_id":"627637bb27bb3d0a86dc0f7c","Num":"ALO220507-01","Undertaker":"Justina","Vender":"","etc":"","Status":0,"__v":0},{"Date":{"year":2022,"month":9,"day":15},"Price":[0,null],"Warehouse":[3,3,3,3,3,3,3,3,3,3],"Location":["C","走道","H","H","H","F","H","H","H","H"],"LastWarehouse":[3,3,0,0,0,0,0,0,0,0],"LastLocation":["-","-","D","A","C","D","D","B","D","D"],"_id":"63229f2cec9c1b0a8152d792","Num":"ALO220915-01","Undertaker":"王詩婷 Justina","Vender":"","etc":"","Status":0,"__v":0}],"Size":[170,240,null,0],"FrameSize":[null,null,null,0],"Currency":[0],"Type":"繪畫","cName":"Scala","eName":"Scala","Num":"AB001/17/008","Image":"/Image/18f59750-0cdf-11ea-90c6-3390319ea387.png","cMaterials":"油彩、畫布","eMaterials":" Oil on canvas","Age":2017,"Edition":"","Asset_Type":"1","StockStatus":"1","Warehouse":3,"Location":"走道","SaleStatus":"0","Guarantee_Num":"","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[49000,0],"FramePrice":[50000,0],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":[""],"FrameCostPrice":[null],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85bb3baf97851e55edd60f","ArtworkID":"5d85bb3baf97851e55edd60f","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":4,"Debit":null,"__v":0,"author":[{"_id":"5e181ec0632d0e34a758e986","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85bb3baf97851e55edd60f","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb6af97851e55edd668","ArtworkID":"5d85bb3baf97851e55edd60f","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":23,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2020,"month":4,"day":23},"Price":[0,1],"Quote":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"_id":"5ea133af3918af1cceda47ad","Num":"QUT200423-01","Undertaker":"林莉蓉 Lily","Contact_Name":"","etc":"Anna Bittersol","Status":0,"__v":0},{"Date":{"year":2020,"month":5,"day":26},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],"Location":["-","-","-","G","-","-","-","-","-","-","-","-","G","-","-","-"],"_id":"5eca321c36619e5943838825","Num":"RTN200526-01","Undertaker":"張加茵","Contact_Name":"Anna Bittersohl","Address":"Spinnereistr. 7, 04179 Leipzig, GERMANY","Phone":"+49 (0)151 14476695","Vender":"TNT","etc":"Work Return","Status":0,"__v":0}],"Size":[30,25,null,0],"FrameSize":[null,null,null,0],"Currency":[0,1],"Type":"繪畫","cName":"Colour Field","eName":"Colour Field","Num":"AB001/17/009","Image":"/Image/5d7cf070-dc34-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、木板","eMaterials":"Oil on wood","Age":2017,"Edition":"","Asset_Type":"","StockStatus":"2","Warehouse":0,"Location":"-","SaleStatus":"0","Guarantee_Num":"","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[49000],"FramePrice":[50000,1700],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":[""],"FrameCostPrice":[null],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85baa1af97851e55edd609","ArtworkID":"5d85baa1af97851e55edd609","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":4,"Debit":null,"__v":0,"author":[{"_id":"5e181e5f632d0e34a758e984","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85baa1af97851e55edd609","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb6af97851e55edd666","ArtworkID":"5d85baa1af97851e55edd609","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":18,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2020,"month":4,"day":23},"Price":[0,1],"Quote":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"_id":"5ea133af3918af1cceda47ad","Num":"QUT200423-01","Undertaker":"林莉蓉 Lily","Contact_Name":"","etc":"Anna Bittersol","Status":0,"__v":0},{"Date":{"year":2020,"month":5,"day":26},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],"Location":["-","-","-","G","-","-","-","-","-","-","-","-","G","-","-","-"],"_id":"5eca321c36619e5943838825","Num":"RTN200526-01","Undertaker":"張加茵","Contact_Name":"Anna Bittersohl","Address":"Spinnereistr. 7, 04179 Leipzig, GERMANY","Phone":"+49 (0)151 14476695","Vender":"TNT","etc":"Work Return","Status":0,"__v":0}],"Size":[30,25,null,0],"FrameSize":[null,null,null,0],"Currency":[0,1],"Type":"繪畫","cName":"Blaupause","eName":"Blaupause","Num":"AB001/18/001","Image":"/Image/01e13fa0-dc34-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、木板","eMaterials":"Oil on wood","Age":2018,"Edition":"","Asset_Type":"","StockStatus":"2","Warehouse":0,"Location":"-","SaleStatus":"0","Guarantee_Num":"","IsForSale":true},{"FrameType":[true,false,false,false,false],"PedestalType":[false,false,false,false,false],"PedestalSize":[null,null,null,0],"PackageType":[false,false,false,false,false],"PackageSize":[null,null,null,0],"UnitPrice":[null],"FixedPrice":[49000],"FramePrice":[50000,1700],"BoxFee":[null],"UnitCost":[null],"FixedCost":[null],"ArtworkCost":[null],"FrameCost":[null],"FrameVendor":[""],"FrameCostPrice":[null],"FixVendor":[""],"FixPrice":[null],"PackageVendor":[""],"PackagePrice":[null],"Other":[""],"OtherPrice":[null],"Frame_Currency":[0],"Package_Currency":[0],"Fix_Currency":[0],"Other_Currency":[0],"_id":"5d85baf0af97851e55edd60c","ArtworkID":"5d85baf0af97851e55edd60c","Proxy":"Rutger Brandt Gallery","Playtime":"","cDescription":"1982年，出生於德國達豪(Dachau)的Anna Bittersohl，長期關切著知覺感知和記憶結構對個人與社會產生的影響。作品多以拼貼的手法，繪製出一個個如夢境般、流動的錯置時空場域為特色。值得一提的是，在Anna Bittersohl獨特的藝術語彙之中，色塊起著重要的作用。它揉合著理性與感性—可視為我們對感知/情感複雜度的指標—將我們從日常生活內熟悉的寫實之物，牽引至情緒、感性的抽象之中。以一種非常態、跳脫直線敘事性的方式編排畫面，畫面多有著如夢中夢般的虛實、流露著神秘而奇幻的氣質。隨著藝術家留給觀眾閱讀的痕跡，觀眾不自覺地調整觀看角度和距離藉以識別圖像，帶領了我們如同漫遊者般遊走在未知場域的新體驗。","eDescription":"Anna Bittersohl, born in 1982 in Dachau, where the first Nazi concentration camps opened in Germany, might have been influenced by transformative social impacts. Anna has concerned about the structure of human perception and memories which bring resulting effects to her. She tends to use collage and remixed techniques to create a dreamy floating space. As what Anna said, ‘I am fascinated by following this thought within my works; to understand my painting as an open memory of sorts. And to let the colour adapt to the way the brain works.’ Digging deep in the mind of the artist, viewers could follow the traces and trivial clues hidden in the paintings to make sense of the world. ","FrameDescription":"無裱框","PedestalDescription":"","PackageDescription":"","BasicEtc":"","SizeNum":4,"Debit":null,"__v":0,"author":[{"_id":"5e181e8c632d0e34a758e985","name":"Anna Bittersohl","cName":"Anna Bittersohl","eName":"Anna Bittersohl","ID":"AB001","exID":"5d85ba63af97851e55edd605","__v":0,"ArtworkID":"5d85baf0af97851e55edd60c","AuthorID":"5d85ba63af97851e55edd607"}],"artwork2invoice":{"_id":"5d85fcb6af97851e55edd667","ArtworkID":"5d85baf0af97851e55edd60c","InvoiceID":"5d85fcadaf97851e55edd656","InvoiceType":"INV","ItemType":"Artwork","Index":15,"__v":0},"invoice":[{"Date":{"year":2019,"month":8,"day":13},"Price":[0,null],"Warehouse":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Location":["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"],"_id":"5d85fcadaf97851e55edd656","Num":"INV190813-01","Undertaker":"AKIGallery","Contact_Name":"Rutger Brandt Gallery","Address":"","Phone":"","Vender":null,"etc":"2019.09《時光映像》統一進貨處理","Status":0,"__v":0},{"Date":{"year":2020,"month":4,"day":23},"Price":[0,1],"Quote":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"_id":"5ea133af3918af1cceda47ad","Num":"QUT200423-01","Undertaker":"林莉蓉 Lily","Contact_Name":"","etc":"Anna Bittersol","Status":0,"__v":0},{"Date":{"year":2020,"month":5,"day":26},"Price":[0,null],"Warehouse":[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],"Location":["-","-","-","G","-","-","-","-","-","-","-","-","G","-","-","-"],"_id":"5eca321c36619e5943838825","Num":"RTN200526-01","Undertaker":"張加茵","Contact_Name":"Anna Bittersohl","Address":"Spinnereistr. 7, 04179 Leipzig, GERMANY","Phone":"+49 (0)151 14476695","Vender":"TNT","etc":"Work Return","Status":0,"__v":0}],"Size":[30,25,null,0],"FrameSize":[null,null,null,0],"Currency":[0,1],"Type":"繪畫","cName":"Collection of Mind","eName":"Collection of Mind","Num":"AB001/18/002","Image":"/Image/30ee8960-dc34-11e9-9e16-51da5fc0b2ec.png","cMaterials":"油彩、木板","eMaterials":"Oil on wood","Age":2018,"Edition":"","Asset_Type":"","StockStatus":"2","Warehouse":0,"Location":"-","SaleStatus":"0","Guarantee_Num":"","IsForSale":true}],"totalRawData":2761,"totalPages":277}`
    ),
  ];
});
