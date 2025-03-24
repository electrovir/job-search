(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function G(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Gf(e){return G(e).filter(t=>isNaN(Number(t)))}function We(e){return Gf(e).map(n=>e[n])}var Kf=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Hf=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Zf=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,zi={Space_Separator:Kf,ID_Start:Hf,ID_Continue:Zf},oe={isSpaceSeparator(e){return typeof e=="string"&&zi.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||zi.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||zi.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let $s,we,nt,zr,Ct,ze,fe,oo,Hn;var Yf=function(t,n){$s=String(t),we="start",nt=[],zr=0,Ct=1,ze=0,fe=void 0,oo=void 0,Hn=void 0;do fe=Jf(),ed[we]();while(fe.type!=="eof");return typeof n=="function"?Ss({"":Hn},"",n):Hn};function Ss(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=String(i),o=Ss(r,s,n);o===void 0?delete r[s]:Object.defineProperty(r,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const s=Ss(r,i,n);s===void 0?delete r[i]:Object.defineProperty(r,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let L,P,Wn,Xe,R;function Jf(){for(L="default",P="",Wn=!1,Xe=1;;){R=st();const e=_u[L]();if(e)return e}}function st(){if($s[zr])return String.fromCodePoint($s.codePointAt(zr))}function y(){const e=st();return e===`
`?(Ct++,ze=0):e?ze+=e.length:ze++,e&&(zr+=e.length),e}const _u={default(){switch(R){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":y();return;case"/":y(),L="comment";return;case void 0:return y(),Q("eof")}if(oe.isSpaceSeparator(R)){y();return}return _u[we]()},comment(){switch(R){case"*":y(),L="multiLineComment";return;case"/":y(),L="singleLineComment";return}throw X(y())},multiLineComment(){switch(R){case"*":y(),L="multiLineCommentAsterisk";return;case void 0:throw X(y())}y()},multiLineCommentAsterisk(){switch(R){case"*":y();return;case"/":y(),L="default";return;case void 0:throw X(y())}y(),L="multiLineComment"},singleLineComment(){switch(R){case`
`:case"\r":case"\u2028":case"\u2029":y(),L="default";return;case void 0:return y(),Q("eof")}y()},value(){switch(R){case"{":case"[":return Q("punctuator",y());case"n":return y(),Mt("ull"),Q("null",null);case"t":return y(),Mt("rue"),Q("boolean",!0);case"f":return y(),Mt("alse"),Q("boolean",!1);case"-":case"+":y()==="-"&&(Xe=-1),L="sign";return;case".":P=y(),L="decimalPointLeading";return;case"0":P=y(),L="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":P=y(),L="decimalInteger";return;case"I":return y(),Mt("nfinity"),Q("numeric",1/0);case"N":return y(),Mt("aN"),Q("numeric",NaN);case'"':case"'":Wn=y()==='"',P="",L="string";return}throw X(y())},identifierNameStartEscape(){if(R!=="u")throw X(y());y();const e=Fs();switch(e){case"$":case"_":break;default:if(!oe.isIdStartChar(e))throw Zo();break}P+=e,L="identifierName"},identifierName(){switch(R){case"$":case"_":case"‌":case"‍":P+=y();return;case"\\":y(),L="identifierNameEscape";return}if(oe.isIdContinueChar(R)){P+=y();return}return Q("identifier",P)},identifierNameEscape(){if(R!=="u")throw X(y());y();const e=Fs();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!oe.isIdContinueChar(e))throw Zo();break}P+=e,L="identifierName"},sign(){switch(R){case".":P=y(),L="decimalPointLeading";return;case"0":P=y(),L="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":P=y(),L="decimalInteger";return;case"I":return y(),Mt("nfinity"),Q("numeric",Xe*(1/0));case"N":return y(),Mt("aN"),Q("numeric",NaN)}throw X(y())},zero(){switch(R){case".":P+=y(),L="decimalPoint";return;case"e":case"E":P+=y(),L="decimalExponent";return;case"x":case"X":P+=y(),L="hexadecimal";return}return Q("numeric",Xe*0)},decimalInteger(){switch(R){case".":P+=y(),L="decimalPoint";return;case"e":case"E":P+=y(),L="decimalExponent";return}if(oe.isDigit(R)){P+=y();return}return Q("numeric",Xe*Number(P))},decimalPointLeading(){if(oe.isDigit(R)){P+=y(),L="decimalFraction";return}throw X(y())},decimalPoint(){switch(R){case"e":case"E":P+=y(),L="decimalExponent";return}if(oe.isDigit(R)){P+=y(),L="decimalFraction";return}return Q("numeric",Xe*Number(P))},decimalFraction(){switch(R){case"e":case"E":P+=y(),L="decimalExponent";return}if(oe.isDigit(R)){P+=y();return}return Q("numeric",Xe*Number(P))},decimalExponent(){switch(R){case"+":case"-":P+=y(),L="decimalExponentSign";return}if(oe.isDigit(R)){P+=y(),L="decimalExponentInteger";return}throw X(y())},decimalExponentSign(){if(oe.isDigit(R)){P+=y(),L="decimalExponentInteger";return}throw X(y())},decimalExponentInteger(){if(oe.isDigit(R)){P+=y();return}return Q("numeric",Xe*Number(P))},hexadecimal(){if(oe.isHexDigit(R)){P+=y(),L="hexadecimalInteger";return}throw X(y())},hexadecimalInteger(){if(oe.isHexDigit(R)){P+=y();return}return Q("numeric",Xe*Number(P))},string(){switch(R){case"\\":y(),P+=Qf();return;case'"':if(Wn)return y(),Q("string",P);P+=y();return;case"'":if(!Wn)return y(),Q("string",P);P+=y();return;case`
`:case"\r":throw X(y());case"\u2028":case"\u2029":td(R);break;case void 0:throw X(y())}P+=y()},start(){switch(R){case"{":case"[":return Q("punctuator",y())}L="value"},beforePropertyName(){switch(R){case"$":case"_":P=y(),L="identifierName";return;case"\\":y(),L="identifierNameStartEscape";return;case"}":return Q("punctuator",y());case'"':case"'":Wn=y()==='"',L="string";return}if(oe.isIdStartChar(R)){P+=y(),L="identifierName";return}throw X(y())},afterPropertyName(){if(R===":")return Q("punctuator",y());throw X(y())},beforePropertyValue(){L="value"},afterPropertyValue(){switch(R){case",":case"}":return Q("punctuator",y())}throw X(y())},beforeArrayValue(){if(R==="]")return Q("punctuator",y());L="value"},afterArrayValue(){switch(R){case",":case"]":return Q("punctuator",y())}throw X(y())},end(){throw X(y())}};function Q(e,t){return{type:e,value:t,line:Ct,column:ze}}function Mt(e){for(const t of e){if(st()!==t)throw X(y());y()}}function Qf(){switch(st()){case"b":return y(),"\b";case"f":return y(),"\f";case"n":return y(),`
`;case"r":return y(),"\r";case"t":return y(),"	";case"v":return y(),"\v";case"0":if(y(),oe.isDigit(st()))throw X(y());return"\0";case"x":return y(),Xf();case"u":return y(),Fs();case`
`:case"\u2028":case"\u2029":return y(),"";case"\r":return y(),st()===`
`&&y(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw X(y());case void 0:throw X(y())}return y()}function Xf(){let e="",t=st();if(!oe.isHexDigit(t)||(e+=y(),t=st(),!oe.isHexDigit(t)))throw X(y());return e+=y(),String.fromCodePoint(parseInt(e,16))}function Fs(){let e="",t=4;for(;t-- >0;){const n=st();if(!oe.isHexDigit(n))throw X(y());e+=y()}return String.fromCodePoint(parseInt(e,16))}const ed={start(){if(fe.type==="eof")throw It();Gi()},beforePropertyName(){switch(fe.type){case"identifier":case"string":oo=fe.value,we="afterPropertyName";return;case"punctuator":Ar();return;case"eof":throw It()}},afterPropertyName(){if(fe.type==="eof")throw It();we="beforePropertyValue"},beforePropertyValue(){if(fe.type==="eof")throw It();Gi()},beforeArrayValue(){if(fe.type==="eof")throw It();if(fe.type==="punctuator"&&fe.value==="]"){Ar();return}Gi()},afterPropertyValue(){if(fe.type==="eof")throw It();switch(fe.value){case",":we="beforePropertyName";return;case"}":Ar()}},afterArrayValue(){if(fe.type==="eof")throw It();switch(fe.value){case",":we="beforeArrayValue";return;case"]":Ar()}},end(){}};function Gi(){let e;switch(fe.type){case"punctuator":switch(fe.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=fe.value;break}if(Hn===void 0)Hn=e;else{const t=nt[nt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,oo,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")nt.push(e),Array.isArray(e)?we="beforeArrayValue":we="beforePropertyName";else{const t=nt[nt.length-1];t==null?we="end":Array.isArray(t)?we="afterArrayValue":we="afterPropertyValue"}}function Ar(){nt.pop();const e=nt[nt.length-1];e==null?we="end":Array.isArray(e)?we="afterArrayValue":we="afterPropertyValue"}function X(e){return Gr(e===void 0?`JSON5: invalid end of input at ${Ct}:${ze}`:`JSON5: invalid character '${Ru(e)}' at ${Ct}:${ze}`)}function It(){return Gr(`JSON5: invalid end of input at ${Ct}:${ze}`)}function Zo(){return ze-=5,Gr(`JSON5: invalid identifier character at ${Ct}:${ze}`)}function td(e){console.warn(`JSON5: '${Ru(e)}' in strings is not valid ECMAScript; consider escaping`)}function Ru(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function Gr(e){const t=new SyntaxError(e);return t.lineNumber=Ct,t.columnNumber=ze,t}var nd=function(t,n,r){const i=[];let s="",o,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){o=[];for(const v of n){let T;typeof v=="string"?T=v:(typeof v=="number"||v instanceof String||v instanceof Number)&&(T=String(v)),T!==void 0&&o.indexOf(T)<0&&o.push(T)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),c("",{"":t});function c(v,T){let $=T[v];switch($!=null&&(typeof $.toJSON5=="function"?$=$.toJSON5(v):typeof $.toJSON=="function"&&($=$.toJSON(v))),a&&($=a.call(T,v,$)),$ instanceof Number?$=Number($):$ instanceof String?$=String($):$ instanceof Boolean&&($=$.valueOf()),$){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof $=="string")return h($);if(typeof $=="number")return String($);if(typeof $=="object")return Array.isArray($)?g($):m($)}function h(v){const T={"'":.1,'"':.2},$={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let I="";for(let q=0;q<v.length;q++){const Z=v[q];switch(Z){case"'":case'"':T[Z]++,I+=Z;continue;case"\0":if(oe.isDigit(v[q+1])){I+="\\x00";continue}}if($[Z]){I+=$[Z];continue}if(Z<" "){let Ke=Z.charCodeAt(0).toString(16);I+="\\x"+("00"+Ke).substring(Ke.length);continue}I+=Z}const U=l||Object.keys(T).reduce((q,Z)=>T[q]<T[Z]?q:Z);return I=I.replace(new RegExp(U,"g"),$[U]),U+I+U}function m(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let T=s;s=s+u;let $=o||Object.keys(v),I=[];for(const q of $){const Z=c(q,v);if(Z!==void 0){let Ke=p(q)+":";u!==""&&(Ke+=" "),Ke+=Z,I.push(Ke)}}let U;if(I.length===0)U="{}";else{let q;if(u==="")q=I.join(","),U="{"+q+"}";else{let Z=`,
`+s;q=I.join(Z),U=`{
`+s+q+`,
`+T+"}"}}return i.pop(),s=T,U}function p(v){if(v.length===0)return h(v);const T=String.fromCodePoint(v.codePointAt(0));if(!oe.isIdStartChar(T))return h(v);for(let $=T.length;$<v.length;$++)if(!oe.isIdContinueChar(String.fromCodePoint(v.codePointAt($))))return h(v);return v}function g(v){if(i.indexOf(v)>=0)throw TypeError("Converting circular structure to JSON5");i.push(v);let T=s;s=s+u;let $=[];for(let U=0;U<v.length;U++){const q=c(String(U),v);$.push(q!==void 0?q:"null")}let I;if($.length===0)I="[]";else if(u==="")I="["+$.join(",")+"]";else{let U=`,
`+s,q=$.join(U);I=`[
`+s+q+`,
`+T+"]"}return i.pop(),s=T,I}};const rd={parse:Yf,stringify:nd};var Ou=rd;function d(e){try{return Ou.stringify(e)}catch{return String(e)}}const id=[".",":",";",",","?","!"],sd=new RegExp(`[${id.join("")}]+$`);function Yo(e){return e.replace(sd,"")}function Te(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:d(e):""}function mi(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&Yo(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:Yo(r)).join(": "):""}function ce(e){return e instanceof Error?e:new Error(Te(e))}function pi(e,t){const n=ce(e);return n.message=mi(t,n.message),n}var Jo;(function(e){e.Get="GET",e.Head="HEAD",e.Options="OPTIONS",e.Trace="TRACE",e.Put="PUT",e.Delete="DELETE",e.Post="POST",e.Patch="PATCH",e.Connect="CONNECT"})(Jo||(Jo={}));var w;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(w||(w={}));var S;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(S||(S={}));S.ClientError,S.ServerError;w.Continue+"",S.Information,w.SwitchingProtocols+"",S.Information,w.Processing+"",S.Information,w.EarlyHints+"",S.Information,w.Ok+"",S.Success,w.Created+"",S.Success,w.Accepted+"",S.Success,w.NonAuthoritativeInformation+"",S.Success,w.NoContent+"",S.Success,w.ResetContent+"",S.Success,w.PartialContent+"",S.Success,w.MultiStatus+"",S.Success,w.AlreadyReported+"",S.Success,w.ImUsed+"",S.Success,w.MultipleChoices+"",S.Redirect,w.MovedPermanently+"",S.Redirect,w.Found+"",S.Redirect,w.SeeOther+"",S.Redirect,w.NotModified+"",S.Redirect,w.UseProxy+"",S.Redirect,w.Unused+"",S.Redirect,w.TemporaryRedirect+"",S.Redirect,w.PermanentRedirect+"",S.Redirect,w.BadRequest+"",S.ClientError,w.Unauthorized+"",S.ClientError,w.PaymentRequired+"",S.ClientError,w.Forbidden+"",S.ClientError,w.NotFound+"",S.ClientError,w.MethodNotAllowed+"",S.ClientError,w.NotAcceptable+"",S.ClientError,w.ProxyAuthenticationRequired+"",S.ClientError,w.RequestTimeout+"",S.ClientError,w.Conflict+"",S.ClientError,w.Gone+"",S.ClientError,w.LengthRequired+"",S.ClientError,w.PreconditionFailed+"",S.ClientError,w.PayloadTooLarge+"",S.ClientError,w.UriTooLong+"",S.ClientError,w.UnsupportedMediaType+"",S.ClientError,w.RangeNotSatisfiable+"",S.ClientError,w.ExpectationFailed+"",S.ClientError,w.ImATeapot+"",S.ClientError,w.MisdirectedRequest+"",S.ClientError,w.UnprocessableContent+"",S.ClientError,w.Locked+"",S.ClientError,w.FailedDependency+"",S.ClientError,w.TooEarly+"",S.ClientError,w.UpgradeRequired+"",S.ClientError,w.PreconditionRequired+"",S.ClientError,w.TooManyRequests+"",S.ClientError,w.RequestHeaderFieldsTooLarge+"",S.ClientError,w.UnavailableForLegalReasons+"",S.ClientError,w.InternalServerError+"",S.ServerError,w.NotImplemented+"",S.ServerError,w.BadGateway+"",S.ServerError,w.ServiceUnavailable+"",S.ServerError,w.GatewayTimeout+"",S.ServerError,w.HttpVersionNotSupported+"",S.ServerError,w.VariantAlsoNegotiates+"",S.ServerError,w.InsufficientStorage+"",S.ServerError,w.LoopDetected+"",S.ServerError,w.NotExtended+"",S.ServerError,w.NetworkAuthenticationRequired+"",S.ServerError;const Pr={[S.Information]:[w.Continue,w.SwitchingProtocols,w.Processing,w.EarlyHints],[S.Success]:[w.Ok,w.Created,w.Accepted,w.NonAuthoritativeInformation,w.NoContent,w.ResetContent,w.PartialContent,w.MultiStatus,w.AlreadyReported,w.ImUsed],[S.Redirect]:[w.MultipleChoices,w.MovedPermanently,w.Found,w.SeeOther,w.NotModified,w.UseProxy,w.Unused,w.TemporaryRedirect,w.PermanentRedirect],[S.ClientError]:[w.BadRequest,w.Unauthorized,w.PaymentRequired,w.Forbidden,w.NotFound,w.MethodNotAllowed,w.NotAcceptable,w.ProxyAuthenticationRequired,w.RequestTimeout,w.Conflict,w.Gone,w.LengthRequired,w.PreconditionFailed,w.PayloadTooLarge,w.UriTooLong,w.UnsupportedMediaType,w.RangeNotSatisfiable,w.ExpectationFailed,w.ImATeapot,w.MisdirectedRequest,w.UnprocessableContent,w.Locked,w.FailedDependency,w.TooEarly,w.UpgradeRequired,w.PreconditionRequired,w.TooManyRequests,w.RequestHeaderFieldsTooLarge,w.UnavailableForLegalReasons],[S.ServerError]:[w.InternalServerError,w.NotImplemented,w.BadGateway,w.ServiceUnavailable,w.GatewayTimeout,w.HttpVersionNotSupported,w.VariantAlsoNegotiates,w.InsufficientStorage,w.LoopDetected,w.NotExtended,w.NetworkAuthenticationRequired]};function Vu({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Ts{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(ce(r))}})}}class Zt extends Error{}class od extends Zt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class ad extends Zt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class ud extends Zt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class an extends Zt{}class Uu extends Zt{constructor(t){super(`Invalid unit ${t}`)}}class de extends Zt{}class dt extends Zt{constructor(){super("Zone is an abstract class")}}const b="numeric",Ge="short",Se="long",Kr={year:b,month:b,day:b},Wu={year:b,month:Ge,day:b},ld={year:b,month:Ge,day:b,weekday:Ge},ju={year:b,month:Se,day:b},qu={year:b,month:Se,day:b,weekday:Se},zu={hour:b,minute:b},Gu={hour:b,minute:b,second:b},Ku={hour:b,minute:b,second:b,timeZoneName:Ge},Hu={hour:b,minute:b,second:b,timeZoneName:Se},Zu={hour:b,minute:b,hourCycle:"h23"},Yu={hour:b,minute:b,second:b,hourCycle:"h23"},Ju={hour:b,minute:b,second:b,hourCycle:"h23",timeZoneName:Ge},Qu={hour:b,minute:b,second:b,hourCycle:"h23",timeZoneName:Se},Xu={year:b,month:b,day:b,hour:b,minute:b},el={year:b,month:b,day:b,hour:b,minute:b,second:b},tl={year:b,month:Ge,day:b,hour:b,minute:b},nl={year:b,month:Ge,day:b,hour:b,minute:b,second:b},cd={year:b,month:Ge,day:b,weekday:Ge,hour:b,minute:b},rl={year:b,month:Se,day:b,hour:b,minute:b,timeZoneName:Ge},il={year:b,month:Se,day:b,hour:b,minute:b,second:b,timeZoneName:Ge},sl={year:b,month:Se,day:b,weekday:Se,hour:b,minute:b,timeZoneName:Se},ol={year:b,month:Se,day:b,weekday:Se,hour:b,minute:b,second:b,timeZoneName:Se};class dr{get type(){throw new dt}get name(){throw new dt}get ianaName(){return this.name}get isUniversal(){throw new dt}offsetName(t,n){throw new dt}formatOffset(t,n){throw new dt}offset(t){throw new dt}equals(t){throw new dt}get isValid(){throw new dt}}let Ki=null;class wi extends dr{static get instance(){return Ki===null&&(Ki=new wi),Ki}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return pl(t,n,r)}formatOffset(t,n){return Zn(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Br={};function fd(e){return Br[e]||(Br[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Br[e]}const dd={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function hd(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,u,l,c]=r;return[o,i,s,a,u,l,c]}function md(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=dd[s];s==="era"?r[a]=o:M(a)||(r[a]=parseInt(o,10))}return r}let br={};class ot extends dr{static create(t){return br[t]||(br[t]=new ot(t)),br[t]}static resetCache(){br={},Br={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=ot.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return pl(t,n,r,this.name)}formatOffset(t,n){return Zn(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=fd(this.name);let[i,s,o,a,u,l,c]=r.formatToParts?md(r,n):hd(r,n);a==="BC"&&(i=-Math.abs(i)+1);const m=gi({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+n;const g=p%1e3;return p-=g>=0?g:1e3+g,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Qo={};function pd(e,t={}){const n=JSON.stringify([e,t]);let r=Qo[n];return r||(r=new Intl.ListFormat(e,t),Qo[n]=r),r}let ks={};function xs(e,t={}){const n=JSON.stringify([e,t]);let r=ks[n];return r||(r=new Intl.DateTimeFormat(e,t),ks[n]=r),r}let Ns={};function wd(e,t={}){const n=JSON.stringify([e,t]);let r=Ns[n];return r||(r=new Intl.NumberFormat(e,t),Ns[n]=r),r}let Ms={};function yd(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let s=Ms[i];return s||(s=new Intl.RelativeTimeFormat(e,t),Ms[i]=s),s}let jn=null;function gd(){return jn||(jn=new Intl.DateTimeFormat().resolvedOptions().locale,jn)}let Xo={};function vd(e){let t=Xo[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,Xo[e]=t}return t}function Dd(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=xs(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=xs(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function Ed(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Ad(e){const t=[];for(let n=1;n<=12;n++){const r=k.utc(2009,n,1);t.push(e(r))}return t}function bd(e){const t=[];for(let n=1;n<=7;n++){const r=k.utc(2016,11,13+n);t.push(e(r))}return t}function Cr(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function Cd(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class $d{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=wd(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):fo(t,3);return ae(n,this.padTo)}}}class Sd{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&ot.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=xs(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Fd{constructor(t,n,r){this.opts={style:"long",...r},!n&&hl()&&(this.rtf=yd(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):Yd(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Td={firstDay:1,minimalDays:4,weekend:[6,7]};class z{static fromOpts(t){return z.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,s=!1){const o=t||te.defaultLocale,a=o||(s?"en-US":gd()),u=n||te.defaultNumberingSystem,l=r||te.defaultOutputCalendar,c=Is(i)||te.defaultWeekSettings;return new z(a,u,l,c,o)}static resetCache(){jn=null,ks={},Ns={},Ms={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return z.create(t,n,r,i)}constructor(t,n,r,i,s){const[o,a,u]=Dd(t);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=Ed(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Cd(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:z.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Is(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Cr(this,t,gl,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Ad(s=>this.extract(s,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return Cr(this,t,El,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=bd(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Cr(this,void 0,()=>Al,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[k.utc(2016,11,13,9),k.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Cr(this,t,bl,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[k.utc(-40,1,1),k.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(t={}){return new $d(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Sd(t,this.intl,n)}relFormatter(t={}){return new Fd(this.intl,this.isEnglish(),t)}listFormatter(t={}){return pd(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ml()?vd(this.locale):Td}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Hi=null;class ye extends dr{static get utcInstance(){return Hi===null&&(Hi=new ye(0)),Hi}static instance(t){return t===0?ye.utcInstance:new ye(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new ye(vi(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Zn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Zn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return Zn(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class kd extends dr{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function yt(e,t){if(M(e)||e===null)return t;if(e instanceof dr)return e;if(Bd(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?wi.instance:n==="utc"||n==="gmt"?ye.utcInstance:ye.parseSpecifier(n)||ot.create(e)}else return bt(e)?ye.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new kd(e)}const ao={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ea={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},xd=ao.hanidec.replace(/[\[|\]]/g,"").split("");function Nd(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(ao.hanidec)!==-1)t+=xd.indexOf(e[n]);else for(const i in ea){const[s,o]=ea[i];r>=s&&r<=o&&(t+=r-s)}}return parseInt(t,10)}else return t}let nn={};function Md(){nn={}}function Oe({numberingSystem:e},t=""){const n=e||"latn";return nn[n]||(nn[n]={}),nn[n][t]||(nn[n][t]=new RegExp(`${ao[n]}${t}`)),nn[n][t]}let ta=()=>Date.now(),na="system",ra=null,ia=null,sa=null,oa=60,aa,ua=null;class te{static get now(){return ta}static set now(t){ta=t}static set defaultZone(t){na=t}static get defaultZone(){return yt(na,wi.instance)}static get defaultLocale(){return ra}static set defaultLocale(t){ra=t}static get defaultNumberingSystem(){return ia}static set defaultNumberingSystem(t){ia=t}static get defaultOutputCalendar(){return sa}static set defaultOutputCalendar(t){sa=t}static get defaultWeekSettings(){return ua}static set defaultWeekSettings(t){ua=Is(t)}static get twoDigitCutoffYear(){return oa}static set twoDigitCutoffYear(t){oa=t%100}static get throwOnInvalid(){return aa}static set throwOnInvalid(t){aa=t}static resetCaches(){z.resetCache(),ot.resetCache(),k.resetCache(),Md()}}class je{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const al=[0,31,59,90,120,151,181,212,243,273,304,334],ul=[0,31,60,91,121,152,182,213,244,274,305,335];function Ie(e,t){return new je("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function uo(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function ll(e,t,n){return n+(hr(e)?ul:al)[t-1]}function cl(e,t){const n=hr(e)?ul:al,r=n.findIndex(s=>s<t),i=t-n[r];return{month:r+1,day:i}}function lo(e,t){return(e-t+7)%7+1}function Hr(e,t=4,n=1){const{year:r,month:i,day:s}=e,o=ll(r,i,s),a=lo(uo(r,i,s),n);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=r-1,u=er(l,t,n)):u>er(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...Di(e)}}function la(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=e,o=lo(uo(r,1,t),n),a=dn(r);let u=i*7+s-o-7+t,l;u<1?(l=r-1,u+=dn(l)):u>a?(l=r+1,u-=dn(r)):l=r;const{month:c,day:h}=cl(l,u);return{year:l,month:c,day:h,...Di(e)}}function Zi(e){const{year:t,month:n,day:r}=e,i=ll(t,n,r);return{year:t,ordinal:i,...Di(e)}}function ca(e){const{year:t,ordinal:n}=e,{month:r,day:i}=cl(t,n);return{year:t,month:r,day:i,...Di(e)}}function fa(e,t){if(!M(e.localWeekday)||!M(e.localWeekNumber)||!M(e.localWeekYear)){if(!M(e.weekday)||!M(e.weekNumber)||!M(e.weekYear))throw new an("Cannot mix locale-based week fields with ISO-based week fields");return M(e.localWeekday)||(e.weekday=e.localWeekday),M(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),M(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Id(e,t=4,n=1){const r=yi(e.weekYear),i=Pe(e.weekNumber,1,er(e.weekYear,t,n)),s=Pe(e.weekday,1,7);return r?i?s?!1:Ie("weekday",e.weekday):Ie("week",e.weekNumber):Ie("weekYear",e.weekYear)}function Pd(e){const t=yi(e.year),n=Pe(e.ordinal,1,dn(e.year));return t?n?!1:Ie("ordinal",e.ordinal):Ie("year",e.year)}function fl(e){const t=yi(e.year),n=Pe(e.month,1,12),r=Pe(e.day,1,Zr(e.year,e.month));return t?n?r?!1:Ie("day",e.day):Ie("month",e.month):Ie("year",e.year)}function dl(e){const{hour:t,minute:n,second:r,millisecond:i}=e,s=Pe(t,0,23)||t===24&&n===0&&r===0&&i===0,o=Pe(n,0,59),a=Pe(r,0,59),u=Pe(i,0,999);return s?o?a?u?!1:Ie("millisecond",i):Ie("second",r):Ie("minute",n):Ie("hour",t)}function M(e){return typeof e>"u"}function bt(e){return typeof e=="number"}function yi(e){return typeof e=="number"&&e%1===0}function Bd(e){return typeof e=="string"}function Ld(e){return Object.prototype.toString.call(e)==="[object Date]"}function hl(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function ml(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function _d(e){return Array.isArray(e)?e:[e]}function da(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const s=[t(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function Rd(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function vn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Is(e){if(e==null)return null;if(typeof e!="object")throw new de("Week settings must be an object");if(!Pe(e.firstDay,1,7)||!Pe(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Pe(t,1,7)))throw new de("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Pe(e,t,n){return yi(e)&&e>=t&&e<=n}function Od(e,t){return e-t*Math.floor(e/t)}function ae(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function pt(e){if(!(M(e)||e===null||e===""))return parseInt(e,10)}function Pt(e){if(!(M(e)||e===null||e===""))return parseFloat(e)}function co(e){if(!(M(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function fo(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function hr(e){return e%4===0&&(e%100!==0||e%400===0)}function dn(e){return hr(e)?366:365}function Zr(e,t){const n=Od(t-1,12)+1,r=e+(t-n)/12;return n===2?hr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function gi(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function ha(e,t,n){return-lo(uo(e,1,t),n)+t-1}function er(e,t=4,n=1){const r=ha(e,t,n),i=ha(e+1,t,n);return(dn(e)-r+i)/7}function Ps(e){return e>99?e:e>te.twoDigitCutoffYear?1900+e:2e3+e}function pl(e,t,n,r=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function vi(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function wl(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new de(`Invalid unit value ${e}`);return t}function Yr(e,t){const n={};for(const r in e)if(vn(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=wl(i)}return n}function Zn(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${ae(n,2)}:${ae(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${ae(n,2)}${ae(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Di(e){return Rd(e,["hour","minute","second","millisecond"])}const Vd=["January","February","March","April","May","June","July","August","September","October","November","December"],yl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ud=["J","F","M","A","M","J","J","A","S","O","N","D"];function gl(e){switch(e){case"narrow":return[...Ud];case"short":return[...yl];case"long":return[...Vd];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const vl=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Dl=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Wd=["M","T","W","T","F","S","S"];function El(e){switch(e){case"narrow":return[...Wd];case"short":return[...Dl];case"long":return[...vl];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Al=["AM","PM"],jd=["Before Christ","Anno Domini"],qd=["BC","AD"],zd=["B","A"];function bl(e){switch(e){case"narrow":return[...zd];case"short":return[...qd];case"long":return[...jd];default:return null}}function Gd(e){return Al[e.hour<12?0:1]}function Kd(e,t){return El(t)[e.weekday-1]}function Hd(e,t){return gl(t)[e.month-1]}function Zd(e,t){return bl(t)[e.year<0?0:1]}function Yd(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&s){const h=e==="days";switch(t){case 1:return h?"tomorrow":`next ${i[e][0]}`;case-1:return h?"yesterday":`last ${i[e][0]}`;case 0:return h?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function ma(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const Jd={D:Kr,DD:Wu,DDD:ju,DDDD:qu,t:zu,tt:Gu,ttt:Ku,tttt:Hu,T:Zu,TT:Yu,TTT:Ju,TTTT:Qu,f:Xu,ff:tl,fff:rl,ffff:sl,F:el,FF:nl,FFF:il,FFFF:ol};class me{static create(t,n={}){return new me(t,n)}static parseFormat(t){let n=null,r="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(t){return Jd[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return ae(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,g)=>this.loc.extract(t,p,g),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>r?Gd(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,g)=>r?Hd(t,p):s(g?{month:p}:{month:p,day:"numeric"},"month"),l=(p,g)=>r?Kd(t,p):s(g?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const g=me.macroTokenToFormatOpts(p);return g?this.formatWithSystemDefault(t,g):p},h=p=>r?Zd(t,p):s({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return ma(me.parseFormat(n),m)}formatDurationFromString(t,n){const r=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const c=r(l);return c?this.num(u.get(c),l.length):l},s=me.parseFormat(n),o=s.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(r).filter(u=>u));return ma(s,i(a))}}const Cl=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function kn(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function xn(...e){return t=>e.reduce(([n,r,i],s)=>{const[o,a,u]=s(t,i);return[{...n,...o},a||r,u]},[{},null,1]).slice(0,2)}function Nn(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function $l(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=pt(t[n+i]);return[r,null,n+i]}}const Sl=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Qd=`(?:${Sl.source}?(?:\\[(${Cl.source})\\])?)?`,ho=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Fl=RegExp(`${ho.source}${Qd}`),mo=RegExp(`(?:T${Fl.source})?`),Xd=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,eh=/(\d{4})-?W(\d\d)(?:-?(\d))?/,th=/(\d{4})-?(\d{3})/,nh=$l("weekYear","weekNumber","weekDay"),rh=$l("year","ordinal"),ih=/(\d{4})-(\d\d)-(\d\d)/,Tl=RegExp(`${ho.source} ?(?:${Sl.source}|(${Cl.source}))?`),sh=RegExp(`(?: ${Tl.source})?`);function hn(e,t,n){const r=e[t];return M(r)?n:pt(r)}function oh(e,t){return[{year:hn(e,t),month:hn(e,t+1,1),day:hn(e,t+2,1)},null,t+3]}function Mn(e,t){return[{hours:hn(e,t,0),minutes:hn(e,t+1,0),seconds:hn(e,t+2,0),milliseconds:co(e[t+3])},null,t+4]}function mr(e,t){const n=!e[t]&&!e[t+1],r=vi(e[t+1],e[t+2]),i=n?null:ye.instance(r);return[{},i,t+3]}function pr(e,t){const n=e[t]?ot.create(e[t]):null;return[{},n,t+1]}const ah=RegExp(`^T?${ho.source}$`),uh=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function lh(e){const[t,n,r,i,s,o,a,u,l]=e,c=t[0]==="-",h=u&&u[0]==="-",m=(p,g=!1)=>p!==void 0&&(g||p&&c)?-p:p;return[{years:m(Pt(n)),months:m(Pt(r)),weeks:m(Pt(i)),days:m(Pt(s)),hours:m(Pt(o)),minutes:m(Pt(a)),seconds:m(Pt(u),u==="-0"),milliseconds:m(co(l),h)}]}const ch={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function po(e,t,n,r,i,s,o){const a={year:t.length===2?Ps(pt(t)):pt(t),month:yl.indexOf(n)+1,day:pt(r),hour:pt(i),minute:pt(s)};return o&&(a.second=pt(o)),e&&(a.weekday=e.length>3?vl.indexOf(e)+1:Dl.indexOf(e)+1),a}const fh=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function dh(e){const[,t,n,r,i,s,o,a,u,l,c,h]=e,m=po(t,i,r,n,s,o,a);let p;return u?p=ch[u]:l?p=0:p=vi(c,h),[m,new ye(p)]}function hh(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const mh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,ph=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,wh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function pa(e){const[,t,n,r,i,s,o,a]=e;return[po(t,i,r,n,s,o,a),ye.utcInstance]}function yh(e){const[,t,n,r,i,s,o,a]=e;return[po(t,a,n,r,i,s,o),ye.utcInstance]}const gh=kn(Xd,mo),vh=kn(eh,mo),Dh=kn(th,mo),Eh=kn(Fl),kl=xn(oh,Mn,mr,pr),Ah=xn(nh,Mn,mr,pr),bh=xn(rh,Mn,mr,pr),Ch=xn(Mn,mr,pr);function $h(e){return Nn(e,[gh,kl],[vh,Ah],[Dh,bh],[Eh,Ch])}function Sh(e){return Nn(hh(e),[fh,dh])}function Fh(e){return Nn(e,[mh,pa],[ph,pa],[wh,yh])}function Th(e){return Nn(e,[uh,lh])}const kh=xn(Mn);function xh(e){return Nn(e,[ah,kh])}const Nh=kn(ih,sh),Mh=kn(Tl),Ih=xn(Mn,mr,pr);function Ph(e){return Nn(e,[Nh,kl],[Mh,Ih])}const wa="Invalid Duration",xl={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Bh={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...xl},ke=146097/400,Xt=146097/4800,Lh={years:{quarters:4,months:12,weeks:ke/7,days:ke,hours:ke*24,minutes:ke*24*60,seconds:ke*24*60*60,milliseconds:ke*24*60*60*1e3},quarters:{months:3,weeks:ke/28,days:ke/4,hours:ke*24/4,minutes:ke*24*60/4,seconds:ke*24*60*60/4,milliseconds:ke*24*60*60*1e3/4},months:{weeks:Xt/7,days:Xt,hours:Xt*24,minutes:Xt*24*60,seconds:Xt*24*60*60,milliseconds:Xt*24*60*60*1e3},...xl},Vt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],_h=Vt.slice(0).reverse();function ht(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new O(r)}function Nl(e,t){let n=t.milliseconds??0;for(const r of _h.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function ya(e,t){const n=Nl(e,t)<0?-1:1;Vt.reduceRight((r,i)=>{if(M(t[i]))return r;if(r){const s=t[r]*n,o=e[i][r],a=Math.floor(s/o);t[i]+=a*n,t[r]-=a*o*n}return i},null),Vt.reduce((r,i)=>{if(M(t[i]))return r;if(r){const s=t[r]%1;t[r]-=s,t[i]+=s*e[r][i]}return i},null)}function Rh(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class O{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?Lh:Bh;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||z.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return O.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new de(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new O({values:Yr(t,O.normalizeUnit),loc:z.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(bt(t))return O.fromMillis(t);if(O.isDuration(t))return t;if(typeof t=="object")return O.fromObject(t);throw new de(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Th(t);return r?O.fromObject(r,n):O.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=xh(t);return r?O.fromObject(r,n):O.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new de("need to specify a reason the Duration is invalid");const r=t instanceof je?t:new je(t,n);if(te.throwOnInvalid)throw new ud(r);return new O({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new Uu(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?me.create(this.loc,r).formatDurationFromString(this,t):wa}toHuman(t={}){if(!this.isValid)return wa;const n=Vt.map(r=>{const i=this.values[r];return M(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=fo(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},k.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Nl(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=O.fromDurationLike(t),r={};for(const i of Vt)(vn(n.values,i)||vn(this.values,i))&&(r[i]=n.get(i)+this.get(i));return ht(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=O.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=wl(t(this.values[r],r));return ht(this,{values:n},!0)}get(t){return this[O.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...Yr(t,O.normalizeUnit)};return ht(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return ht(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return ya(this.matrix,t),ht(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Rh(this.normalize().shiftToAll().toObject());return ht(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>O.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of Vt)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in r)a+=this.matrix[l][o]*r[l],r[l]=0;bt(i[o])&&(a+=i[o]);const u=Math.trunc(a);n[o]=u,r[o]=(a*1e3-u*1e3)/1e3}else bt(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return ya(this.matrix,n),ht(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return ht(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of Vt)if(!n(this.values[r],t.values[r]))return!1;return!0}}const en="Invalid Interval";function Oh(e,t){return!e||!e.isValid?ie.invalid("missing or invalid start"):!t||!t.isValid?ie.invalid("missing or invalid end"):t<e?ie.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ie{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new de("need to specify a reason the Interval is invalid");const r=t instanceof je?t:new je(t,n);if(te.throwOnInvalid)throw new ad(r);return new ie({invalid:r})}static fromDateTimes(t,n){const r=Bn(t),i=Bn(n),s=Oh(r,i);return s??new ie({start:r,end:i})}static after(t,n){const r=O.fromDurationLike(n),i=Bn(t);return ie.fromDateTimes(i,i.plus(r))}static before(t,n){const r=O.fromDurationLike(n),i=Bn(t);return ie.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let s,o;try{s=k.fromISO(r,n),o=s.isValid}catch{o=!1}let a,u;try{a=k.fromISO(i,n),u=a.isValid}catch{u=!1}if(o&&u)return ie.fromDateTimes(s,a);if(o){const l=O.fromISO(i,n);if(l.isValid)return ie.after(s,l)}else if(u){const l=O.fromISO(r,n);if(l.isValid)return ie.before(a,l)}}return ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?ie.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Bn).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(ie.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(t){const n=O.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(ie.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:ie.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return ie.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(ie.fromDateTimes(n,u.time)),n=null);return ie.merge(i)}difference(...t){return ie.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:en}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Kr,n={}){return this.isValid?me.create(this.s.loc.clone(n),t).formatInterval(this):en}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:en}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:en}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:en}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:en}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):O.invalid(this.invalidReason)}mapEndpoints(t){return ie.fromDateTimes(t(this.s),t(this.e))}}class qn{static hasDST(t=te.defaultZone){const n=k.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return ot.isValidZone(t)}static normalizeZone(t){return yt(t,te.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||z.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||z.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||z.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||z.create(n,r,s)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||z.create(n,r,s)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||z.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||z.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return z.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return z.create(n,null,"gregory").eras(t)}static features(){return{relative:hl(),localeWeek:ml()}}}function ga(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(O.fromMillis(r).as("days"))}function Vh(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=ga(u,l);return(c-c%7)/7}],["days",ga]],i={},s=e;let o,a;for(const[u,l]of r)n.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Uh(e,t,n,r){let[i,s,o,a]=Vh(e,t,n);const u=t-i,l=n.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const c=O.fromObject(s,r);return l.length>0?O.fromMillis(u,r).shiftTo(...l).plus(c):c}const Wh="missing Intl.DateTimeFormat.formatToParts support";function j(e,t=n=>n){return{regex:e,deser:([n])=>t(Nd(n))}}const jh=" ",Ml=`[ ${jh}]`,Il=new RegExp(Ml,"g");function qh(e){return e.replace(/\./g,"\\.?").replace(Il,Ml)}function va(e){return e.replace(/\./g,"").replace(Il," ").toLowerCase()}function Ve(e,t){return e===null?null:{regex:RegExp(e.map(qh).join("|")),deser:([n])=>e.findIndex(r=>va(n)===va(r))+t}}function Da(e,t){return{regex:e,deser:([,n,r])=>vi(n,r),groups:t}}function $r(e){return{regex:e,deser:([t])=>t}}function zh(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Gh(e,t){const n=Oe(t),r=Oe(t,"{2}"),i=Oe(t,"{3}"),s=Oe(t,"{4}"),o=Oe(t,"{6}"),a=Oe(t,"{1,2}"),u=Oe(t,"{1,3}"),l=Oe(t,"{1,6}"),c=Oe(t,"{1,9}"),h=Oe(t,"{2,4}"),m=Oe(t,"{4,6}"),p=T=>({regex:RegExp(zh(T.val)),deser:([$])=>$,literal:!0}),v=(T=>{if(e.literal)return p(T);switch(T.val){case"G":return Ve(t.eras("short"),0);case"GG":return Ve(t.eras("long"),0);case"y":return j(l);case"yy":return j(h,Ps);case"yyyy":return j(s);case"yyyyy":return j(m);case"yyyyyy":return j(o);case"M":return j(a);case"MM":return j(r);case"MMM":return Ve(t.months("short",!0),1);case"MMMM":return Ve(t.months("long",!0),1);case"L":return j(a);case"LL":return j(r);case"LLL":return Ve(t.months("short",!1),1);case"LLLL":return Ve(t.months("long",!1),1);case"d":return j(a);case"dd":return j(r);case"o":return j(u);case"ooo":return j(i);case"HH":return j(r);case"H":return j(a);case"hh":return j(r);case"h":return j(a);case"mm":return j(r);case"m":return j(a);case"q":return j(a);case"qq":return j(r);case"s":return j(a);case"ss":return j(r);case"S":return j(u);case"SSS":return j(i);case"u":return $r(c);case"uu":return $r(a);case"uuu":return j(n);case"a":return Ve(t.meridiems(),0);case"kkkk":return j(s);case"kk":return j(h,Ps);case"W":return j(a);case"WW":return j(r);case"E":case"c":return j(n);case"EEE":return Ve(t.weekdays("short",!1),1);case"EEEE":return Ve(t.weekdays("long",!1),1);case"ccc":return Ve(t.weekdays("short",!0),1);case"cccc":return Ve(t.weekdays("long",!0),1);case"Z":case"ZZ":return Da(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Da(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return $r(/[a-z_+-/]{1,256}?/i);case" ":return $r(/[^\S\n\r]/);default:return p(T)}})(e)||{invalidReason:Wh};return v.token=e,v}const Kh={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Hh(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[r];let o=r;r==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=Kh[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function Zh(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function Yh(e,t,n){const r=e.match(t);if(r){const i={};let s=1;for(const o in n)if(vn(n,o)){const a=n[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+u))),s+=u}return[r,i]}else return[r,{}]}function Jh(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return M(e.z)||(n=ot.create(e.z)),M(e.Z)||(n||(n=new ye(e.Z)),r=e.Z),M(e.q)||(e.M=(e.q-1)*3+1),M(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),M(e.u)||(e.S=co(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),n,r]}let Yi=null;function Qh(){return Yi||(Yi=k.fromMillis(1555555555555)),Yi}function Xh(e,t){if(e.literal)return e;const n=me.macroTokenToFormatOpts(e.val),r=_l(n,t);return r==null||r.includes(void 0)?e:r}function Pl(e,t){return Array.prototype.concat(...e.map(n=>Xh(n,t)))}class Bl{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=Pl(me.parseFormat(n),t),this.units=this.tokens.map(r=>Gh(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=Zh(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=Yh(t,this.regex,this.handlers),[i,s,o]=r?Jh(r):[null,null,void 0];if(vn(r,"a")&&vn(r,"H"))throw new an("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Ll(e,t,n){return new Bl(e,n).explainFromTokens(t)}function em(e,t,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=Ll(e,t,n);return[r,i,s,o]}function _l(e,t){if(!e)return null;const r=me.create(t,e).dtFormatter(Qh()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>Hh(o,e,s))}const Ji="Invalid DateTime",tm=864e13;function zn(e){return new je("unsupported zone",`the zone "${e.name}" is not supported`)}function Qi(e){return e.weekData===null&&(e.weekData=Hr(e.c)),e.weekData}function Xi(e){return e.localWeekData===null&&(e.localWeekData=Hr(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Bt(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new k({...n,...t,old:n})}function Rl(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Sr(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Lr(e,t,n){return Rl(gi(e),t,n)}function Ea(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:r,month:i,day:Math.min(e.c.day,Zr(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=O.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=gi(s);let[u,l]=Rl(a,n,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function tn(e,t,n,r,i,s){const{setZone:o,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=k.fromObject(e,{...n,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return k.invalid(new je("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Fr(e,t,n=!0){return e.isValid?me.create(z.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function es(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=ae(e.c.year,n?6:4),t?(r+="-",r+=ae(e.c.month),r+="-",r+=ae(e.c.day)):(r+=ae(e.c.month),r+=ae(e.c.day)),r}function Aa(e,t,n,r,i,s){let o=ae(e.c.hour);return t?(o+=":",o+=ae(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=":")):o+=ae(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=ae(e.c.second),(e.c.millisecond!==0||!r)&&(o+=".",o+=ae(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=ae(Math.trunc(-e.o/60)),o+=":",o+=ae(Math.trunc(-e.o%60))):(o+="+",o+=ae(Math.trunc(e.o/60)),o+=":",o+=ae(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const Ol={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},nm={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},rm={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Vl=["year","month","day","hour","minute","second","millisecond"],im=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],sm=["year","ordinal","hour","minute","second","millisecond"];function om(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Uu(e);return t}function ba(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return om(e)}}function am(e){return Rr[e]||(_r===void 0&&(_r=te.now()),Rr[e]=e.offset(_r)),Rr[e]}function Ca(e,t){const n=yt(t.zone,te.defaultZone);if(!n.isValid)return k.invalid(zn(n));const r=z.fromObject(t);let i,s;if(M(e.year))i=te.now();else{for(const u of Vl)M(e[u])&&(e[u]=Ol[u]);const o=fl(e)||dl(e);if(o)return k.invalid(o);const a=am(n);[i,s]=Lr(e,a,n)}return new k({ts:i,zone:n,loc:r,o:s})}function $a(e,t,n){const r=M(n.round)?!0:n.round,i=(o,a)=>(o=fo(o,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,n.units[n.units.length-1])}function Sa(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let _r,Rr={};class k{constructor(t){const n=t.zone||te.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new je("invalid input"):null)||(n.isValid?null:zn(n));this.ts=M(t.ts)?te.now():t.ts;let i=null,s=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,s]=[t.old.c,t.old.o];else{const a=bt(t.o)&&!t.old?t.o:n.offset(this.ts);i=Sr(this.ts,a),r=Number.isNaN(i.year)?new je("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=t.loc||z.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new k({})}static local(){const[t,n]=Sa(arguments),[r,i,s,o,a,u,l]=n;return Ca({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Sa(arguments),[r,i,s,o,a,u,l]=n;return t.zone=ye.utcInstance,Ca({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=Ld(t)?t.valueOf():NaN;if(Number.isNaN(r))return k.invalid("invalid input");const i=yt(n.zone,te.defaultZone);return i.isValid?new k({ts:r,zone:i,loc:z.fromObject(n)}):k.invalid(zn(i))}static fromMillis(t,n={}){if(bt(t))return t<-864e13||t>tm?k.invalid("Timestamp out of range"):new k({ts:t,zone:yt(n.zone,te.defaultZone),loc:z.fromObject(n)});throw new de(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(bt(t))return new k({ts:t*1e3,zone:yt(n.zone,te.defaultZone),loc:z.fromObject(n)});throw new de("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=yt(n.zone,te.defaultZone);if(!r.isValid)return k.invalid(zn(r));const i=z.fromObject(n),s=Yr(t,ba),{minDaysInFirstWeek:o,startOfWeek:a}=fa(s,i),u=te.now(),l=M(n.specificOffset)?r.offset(u):n.specificOffset,c=!M(s.ordinal),h=!M(s.year),m=!M(s.month)||!M(s.day),p=h||m,g=s.weekYear||s.weekNumber;if((p||c)&&g)throw new an("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new an("Can't mix ordinal dates with month/day");const v=g||s.weekday&&!p;let T,$,I=Sr(u,l);v?(T=im,$=nm,I=Hr(I,o,a)):c?(T=sm,$=rm,I=Zi(I)):(T=Vl,$=Ol);let U=!1;for(const Nt of T){const qi=s[Nt];M(qi)?U?s[Nt]=$[Nt]:s[Nt]=I[Nt]:U=!0}const q=v?Id(s,o,a):c?Pd(s):fl(s),Z=q||dl(s);if(Z)return k.invalid(Z);const Ke=v?la(s,o,a):c?ca(s):s,[Qt,ji]=Lr(Ke,l,r),xt=new k({ts:Qt,zone:r,o:ji,loc:i});return s.weekday&&p&&t.weekday!==xt.weekday?k.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${xt.toISO()}`):xt.isValid?xt:k.invalid(xt.invalid)}static fromISO(t,n={}){const[r,i]=$h(t);return tn(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=Sh(t);return tn(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Fh(t);return tn(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(M(t)||M(n))throw new de("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,c]=em(o,t,n);return c?k.invalid(c):tn(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return k.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=Ph(t);return tn(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new de("need to specify a reason the DateTime is invalid");const r=t instanceof je?t:new je(t,n);if(te.throwOnInvalid)throw new od(r);return new k({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=_l(t,z.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return Pl(me.parseFormat(t),z.fromObject(n)).map(i=>i.val).join("")}static resetCache(){_r=void 0,Rr={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Qi(this).weekYear:NaN}get weekNumber(){return this.isValid?Qi(this).weekNumber:NaN}get weekday(){return this.isValid?Qi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Xi(this).weekday:NaN}get localWeekNumber(){return this.isValid?Xi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Xi(this).weekYear:NaN}get ordinal(){return this.isValid?Zi(this.c).ordinal:NaN}get monthShort(){return this.isValid?qn.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qn.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=gi(this.c),i=this.zone.offset(r-t),s=this.zone.offset(r+t),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const u=r-o*n,l=r-a*n,c=Sr(u,o),h=Sr(l,a);return c.hour===h.hour&&c.minute===h.minute&&c.second===h.second&&c.millisecond===h.millisecond?[Bt(this,{ts:u}),Bt(this,{ts:l})]:[this]}get isInLeapYear(){return hr(this.year)}get daysInMonth(){return Zr(this.year,this.month)}get daysInYear(){return this.isValid?dn(this.year):NaN}get weeksInWeekYear(){return this.isValid?er(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?er(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=me.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(ye.instance(t),n)}toLocal(){return this.setZone(te.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=yt(t,te.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const s=t.offset(this.ts),o=this.toObject();[i]=Lr(o,s,t)}return Bt(this,{ts:i,zone:t})}else return k.invalid(zn(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return Bt(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=Yr(t,ba),{minDaysInFirstWeek:r,startOfWeek:i}=fa(n,this.loc),s=!M(n.weekYear)||!M(n.weekNumber)||!M(n.weekday),o=!M(n.ordinal),a=!M(n.year),u=!M(n.month)||!M(n.day),l=a||u,c=n.weekYear||n.weekNumber;if((l||o)&&c)throw new an("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new an("Can't mix ordinal dates with month/day");let h;s?h=la({...Hr(this.c,r,i),...n},r,i):M(n.ordinal)?(h={...this.toObject(),...n},M(n.day)&&(h.day=Math.min(Zr(h.year,h.month),h.day))):h=ca({...Zi(this.c),...n});const[m,p]=Lr(h,this.o,this.zone);return Bt(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const n=O.fromDurationLike(t);return Bt(this,Ea(this,n))}minus(t){if(!this.isValid)return this;const n=O.fromDurationLike(t).negate();return Bt(this,Ea(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=O.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?me.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):Ji}toLocaleString(t=Kr,n={}){return this.isValid?me.create(this.loc.clone(n),t).formatDateTime(this):Ji}toLocaleParts(t={}){return this.isValid?me.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=es(this,o);return a+="T",a+=Aa(this,o,n,r,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?es(this,t==="extended"):null}toISOWeekDate(){return Fr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+Aa(this,o==="extended",n,t,r,s):null}toRFC2822(){return Fr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Fr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?es(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Fr(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Ji}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return O.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=_d(n).map(O.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Uh(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(k.now(),t,n)}until(t){return this.isValid?ie.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||k.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),$a(n,this.plus(r),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?$a(t.base||k.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(k.isDateTime))throw new de("min requires all arguments be DateTimes");return da(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(k.isDateTime))throw new de("max requires all arguments be DateTimes");return da(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Ll(o,t,n)}static fromStringExplain(t,n,r={}){return k.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=z.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new Bl(s,t)}static fromFormatParser(t,n,r={}){if(M(t)||M(n))throw new de("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,o=z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(n.locale))throw new de(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?k.invalid(c):tn(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Kr}static get DATE_MED(){return Wu}static get DATE_MED_WITH_WEEKDAY(){return ld}static get DATE_FULL(){return ju}static get DATE_HUGE(){return qu}static get TIME_SIMPLE(){return zu}static get TIME_WITH_SECONDS(){return Gu}static get TIME_WITH_SHORT_OFFSET(){return Ku}static get TIME_WITH_LONG_OFFSET(){return Hu}static get TIME_24_SIMPLE(){return Zu}static get TIME_24_WITH_SECONDS(){return Yu}static get TIME_24_WITH_SHORT_OFFSET(){return Ju}static get TIME_24_WITH_LONG_OFFSET(){return Qu}static get DATETIME_SHORT(){return Xu}static get DATETIME_SHORT_WITH_SECONDS(){return el}static get DATETIME_MED(){return tl}static get DATETIME_MED_WITH_SECONDS(){return nl}static get DATETIME_MED_WITH_WEEKDAY(){return cd}static get DATETIME_FULL(){return rl}static get DATETIME_FULL_WITH_SECONDS(){return il}static get DATETIME_HUGE(){return sl}static get DATETIME_HUGE_WITH_SECONDS(){return ol}}function Bn(e){if(k.isDateTime(e))return e;if(e&&e.valueOf&&bt(e.valueOf()))return k.fromJSDate(e);if(e&&typeof e=="object")return k.fromObject(e);throw new de(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var N;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(N||(N={}));N.Years+"",N.Quarters+"",N.Months+"",N.Weeks+"",N.Days+"",N.Hours+"",N.Minutes+"",N.Seconds+"",N.Milliseconds+"";N.Years+"",N.Quarters+"",N.Months+"",N.Weeks+"",N.Days+"",N.Hours+"",N.Minutes+"",N.Seconds+"",N.Milliseconds+"";const Ul=[N.Milliseconds,N.Seconds,N.Minutes,N.Hours,N.Days,N.Weeks,N.Months,N.Quarters,N.Years];N.Milliseconds+"",N.Seconds+"",N.Minutes+"",N.Hours+"",N.Days+"",N.Weeks+"",N.Months+"",N.Quarters+"",N.Years+"";function um(e){return Ul.filter(t=>e[t])}function Bs(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function lm(e){return Bs(Math.max(e-.4,0),{roundToDigits:0})}function Fa(e){return e===0?0:Math.sign(e)}function Dn(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=O.fromObject(e).as(N.Milliseconds);const u=um(t).reverse(),l=Fa(a);u.forEach((p,g)=>{const v=g===u.length-1;if(s&&o||s)r[p]=1/0;else if(o)r[p]=-1/0;else if(p===N.Milliseconds)r.milliseconds=Bs(a,i);else{const T=O.fromObject({milliseconds:a}).as(p),$=Math.sign(T),I=Math.abs(T),U=v?Bs(I,i):Math.floor(i.roundToDigits==null?I:lm(I)),q=U===0?0:U*$;r[p]=q,a-=O.fromObject({[p]:q}).as(N.Milliseconds),l!==Fa(a)&&(a=0)}});let c=!1;const h=[],m=Ul.toReversed().filter(p=>r[p]?(c=!0,!0):c?(h.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(v=>p[v]=!0);const g=Dn(e,p,i);return h.forEach(v=>g[v]=0),g}return r}var F;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(F||(F={}));F.Year,F.Hour,F.Minute,F.Second,F.Millisecond;F.Quarter,F.Month,F.Week,F.Day;F.Millisecond,F.Second,F.Minute,F.Hour,F.Day,F.Week,F.Month,F.Quarter,F.Year;var he;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(he||(he={}));he.Sunday+"",he.Monday+"",he.Tuesday+"",he.Wednesday+"",he.Thursday+"",he.Friday+"",he.Saturday+"";he.Sunday,he.Monday,he.Tuesday,he.Wednesday,he.Thursday,he.Friday,he.Saturday;var ve;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(ve||(ve={}));const Ta=[ve.January,ve.February,ve.March,ve.April,ve.May,ve.June,ve.July,ve.August,ve.September,ve.October,ve.November,ve.December],Jr={min:1,max:12},Qr={min:1,max:31},Xr={min:0,max:23},ei={min:0,max:59},ti={min:0,max:59},ni={min:0,max:999};function cm(e){return Number.isInteger(e)&&Jr.min<=e&&e<=Jr.max}function fm(e){return Number.isInteger(e)&&Qr.min<=e&&e<=Qr.max}function dm(e){return Number.isInteger(e)&&Xr.min<=e&&e<=Xr.max}function hm(e){return Number.isInteger(e)&&ei.min<=e&&e<=ei.max}function mm(e){return Number.isInteger(e)&&ti.min<=e&&e<=ti.max}function pm(e){return Number.isInteger(e)&&ni.min<=e&&e<=ni.max}function wm(e,t){if(!cm(e))throw new f(`${e} is not a valid month number.`,t);return e}function ym(e,t){if(!fm(e))throw new f(`${e} is not a valid day of month.`,t);return e}function gm(e,t){if(!dm(e))throw new f(`${e} is not a valid hour.`,t);return e}function vm(e,t){if(!hm(e))throw new f(`${e} is not a valid minute.`,t);return e}function Dm(e,t){if(!mm(e))throw new f(`${e} is not a valid second.`,t);return e}function Em(e,t){if(!pm(e))throw new f(`${e} is not a valid millisecond.`,t);return e}function zt(e){const t=new Ts,n=Dn(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var Am=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var at;(function(e){e.Node="node",e.Web="web"})(at||(at={}));function bm(){return Am?at.Node:at.Web}const Wl=bm();function Cm(e){return Wl===e}function jl(e){return e[Wl]()}function wo(){return crypto.randomUUID()}class f extends Error{name="AssertionError";constructor(t,n){super(mi(n,t)||"Assertion failed.")}}const ka={interval:{milliseconds:100},timeout:{seconds:10}},ts=Symbol("not set");async function ql(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=$m(t),a=Dn(o.timeout,{milliseconds:!0}).milliseconds,u=Dn(o.interval,{milliseconds:!0});let l=ts,c;async function h(){try{l=n?r():await r(),e(l,...i)}catch(p){l=ts,c=ce(p)}}const m=Date.now();for(;l===ts;)if(await h(),await zt(u),Date.now()-m>=a){const g=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw pi(c,g)}return l}function A(e,t=!1){return(...n)=>ql(e,n,t)}function $m(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:zl(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function zl(e){return{interval:e?.interval||ka.interval,timeout:e?.timeout||ka.timeout}}const Ln={isFalse(e,t){if(e!==!1)throw new f(`'${d(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${d(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new f(`'${d(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new f(`'${d(e)}' is not truthy.`,t)}},Gl={assert:Ln,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new f(`'${d(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${d(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new f(`'${d(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new f(`'${d(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:A(Ln.isFalse),isFalsy:A(Ln.isFalsy),isTrue:A(Ln.isTrue),isTruthy:A(Ln.isTruthy)}};function Sm(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${d(e)} does not end with ${d(t)}}`,n)}else if(e[e.length-1]!==t)throw new f(`${d(e)} does not end with ${d(t)}}`,n)}function Fm(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new f(`${d(e)} ends with ${d(t)}}`,n)}else if(e[e.length-1]===t)throw new f(`${d(e)} ends with ${d(t)}}`,n)}function Tm(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${d(e)} does not start with ${d(t)}}`,n)}else if(e[0]!==t)throw new f(`${d(e)} does not start with ${d(t)}}`,n)}function km(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new f(`${d(e)} starts with ${d(t)}}`,n)}else if(e[0]===t)throw new f(`${d(e)} starts with ${d(t)}}`,n)}const _n={endsWith:Sm,endsWithout:Fm,startsWith:Tm,startsWithout:km},Kl={assert:_n,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${d(e)} does not end with ${d(t)}}`,n)}else if(e[e.length-1]!==t)throw new f(`${d(e)} does not end with ${d(t)}}`,n);return e},endsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new f(`${d(e)} ends with ${d(t)}}`,n)}else if(e[e.length-1]===t)throw new f(`${d(e)} ends with ${d(t)}}`,n);return e},startsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${d(e)} does not start with ${d(t)}}`,n)}else if(e[0]!==t)throw new f(`${d(e)} does not start with ${d(t)}}`,n);return e},startsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new f(`${d(e)} starts with ${d(t)}}`,n)}else if(e[0]===t)throw new f(`${d(e)} starts with ${d(t)}}`,n);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:A(_n.endsWith),endsWithout:A(_n.endsWithout),startsWith:A(_n.startsWith),startsWithout:A(_n.startsWithout)}};function xm(e,t,n){const r=We(t);if(!r.includes(e))throw new f(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function et(e,t){return We(t).includes(e)}const ns={isEnumValue(e,t,n){xm(e,t,n)},isNotEnumValue(e,t,n){const r=We(t);if(r.includes(e))throw new f(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Hl={assert:ns,check:{isEnumValue:et,isNotEnumValue(e,t){return!We(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=We(t);if(!r.includes(e))throw new f(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=We(t);if(r.includes(e))throw new f(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(We(t).includes(e))return e},isNotEnumValue(e,t){if(!We(t).includes(e))return e}},waitUntil:{isEnumValue:A(ns.isEnumValue),isNotEnumValue:A(ns.isNotEnumValue)}},rs={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new f(`${d(e)} is not an object.`,n);if(!t||typeof t!="object")throw new f(`${d(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new f("Entries are equal.",n)}},Zl={assert:rs,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],s=t[r];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],s=t[r];return i!==s})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new f(`${d(e)} is not an object.`,n);if(!t||typeof t!="object")throw new f(`${d(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new f("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:A(rs.entriesEqual),notEntriesEqual:A(rs.notEntriesEqual)}};function ri(e,t){return JSON.stringify(e)===JSON.stringify(t)}function tr(e,t){if(!(e===t||ri(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!ri(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{tr(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${Te(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Gn(e,t){if(e===t||ri(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!ri(n,r)?!1:Object.keys(e).every(s=>Gn(e[s],t[s]))}return!1}const is={jsonEquals(e,t,n){try{tr(e,t)}catch(r){throw new f(Te(r),n)}},notJsonEquals(e,t,n){try{tr(e,t)}catch{return}throw new f("Values are JSON equal.",n)}},Yl={assert:is,check:{jsonEquals(e,t){return Gn(e,t)},notJsonEquals(e,t){return!Gn(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return tr(e,t),e}catch(r){throw new f(Te(r),n)}},notJsonEquals(e,t,n){try{tr(e,t)}catch{return e}throw new f("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(Gn(e,t))return e},notJsonEquals(e,t){if(!Gn(e,t))return e}},waitUntil:{jsonEquals:A(is.jsonEquals),notJsonEquals:A(is.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function xa(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Jl(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Jl.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Ql=typeof WeakMap=="function"?WeakMap:Jl;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Na(e,t,n){if(!n||En(e)||En(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function Tr(e,t,n,r){if(!(!n||En(e)||En(t))){var i=n.get(e);i?i.set(t,r):(i=new Ql,i.set(t,r),n.set(e,i))}}function Ue(e,t,n){if(n&&n.comparator)return Ma(e,t,n);var r=Xl(e,t);return r!==null?r:Ma(e,t,n)}function Xl(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:En(e)||En(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Ma(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Ql;var r=n&&n.comparator,i=Na(e,t,n.memoize);if(i!==null)return i;var s=Na(t,e,n.memoize);if(s!==null)return s;if(r){var o=r(e,t);if(o===!1||o===!0)return Tr(e,t,n.memoize,o),o;var a=Xl(e,t);if(a!==null)return a}var u=xa(e);if(u!==xa(t))return Tr(e,t,n.memoize,!1),!1;Tr(e,t,n.memoize,!0);var l=Nm(e,t,u,n);return Tr(e,t,n.memoize,l),l}function Nm(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Ue(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return ec(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return jt(e,t,r);case"RegExp":return Mm(e,t);case"Generator":return Im(e,t,r);case"DataView":return jt(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return jt(new Uint8Array(e),new Uint8Array(t),r);case"Set":return Ia(e,t,r);case"Map":return Ia(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Bm(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function Mm(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ia(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(o,a){r.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),jt(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function jt(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Ue(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Im(e,t,n){return jt(Ls(e),Ls(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function Pm(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Pa(e){if(Pm(e))try{return Ls(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Ls(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Ba(e){var t=[];for(var n in e)t.push(n);return t}function La(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function ec(e,t,n,r){var i=n.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(Ue(e[n[s]],t[n[s]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Bm(e,t,n){var r=Ba(e),i=Ba(t),s=La(e),o=La(t);if(r=r.concat(s),i=i.concat(o),r.length&&r.length===i.length)return jt(_a(r).sort(),_a(i).sort())===!1?!1:ec(e,t,r,n);var a=Pa(e),u=Pa(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),jt(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function En(e){return e===null||typeof e!="object"}function _a(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}const mt={strictEquals(e,t,n){if(e!==t)throw new f(`

${d(e)}

does not strictly equal

${d(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new f(`

${d(e)}

strictly equals

${d(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new f(`

${d(e)}

does not loosely equal

${d(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new f(`

${d(e)}

loosely equals

${d(t)}

`,n)},deepEquals(e,t,n){if(!Ue(e,t))throw new f(`

${d(e)}

does not deeply equal

${d(t)}

`,n)},notDeepEquals(e,t,n){if(Ue(e,t))throw new f(`

${d(e)}

deeply equals

${d(t)}

`,n)}},tc=mt.deepEquals,nc={assert:mt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Ue(e,t)},notDeepEquals(e,t){return!Ue(e,t)}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new f(`

${d(e)}

does not strictly equal

${d(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new f(`

${d(e)}

strictly equals

${d(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new f(`

${d(e)}

does not loosely equal

${d(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new f(`

${d(e)}

loosely equals

${d(t)}

`,n);return e},deepEquals(e,t,n){if(Ue(e,t))return e;throw new f(`

${d(e)}

does not deeply equal

${d(t)}

`,n)},notDeepEquals(e,t,n){if(Ue(e,t))throw new f(`

${d(e)}

deeply equals

${d(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Ue(e,t))return e},notDeepEquals(e,t){if(!Ue(e,t))return e}},waitUntil:{strictEquals:A(mt.strictEquals),notStrictEquals:A(mt.notStrictEquals),looseEquals:A(mt.looseEquals),notLooseEquals:A(mt.notLooseEquals),deepEquals:A(mt.deepEquals),notDeepEquals:A(mt.notDeepEquals)}};function Ce(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function xe(e,t){return typeof t=="string"?t.includes(e):Ce(t,e)}const Qe={hasValue(e,t,n){if(!Ce(e,t))throw new f(`'${d(e)}' does not have value '${d(t)}'.`,n)},lacksValue(e,t,n){if(Ce(e,t))throw new f(`'${d(e)}' has value '${d(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new f(`'${d(e)}' does not have values '${d(t)}'.`,n)}if(r.length)throw new f(`'${d(e)}' does not have values '${d(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new f(`'${d(e)}' has values '${d(r)}'.`,n)},isIn(e,t,n){if(!xe(e,t))throw new f(`'${d(e)}'

is not in

${d(t)}.`,n)},isNotIn(e,t,n){if(xe(e,t))throw new f(`'${d(e)}'

is in

${d(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${d(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new f(`'${d(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new f(`'${d(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${d(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${d(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${d(e)}' is not empty.`,t)}}},rc={assert:Qe,check:{hasValue(e,t){return Ce(e,t)},lacksValue(e,t){return!Ce(e,t)},hasValues(e,t){return t.every(n=>Ce(e,n))},lacksValues(e,t){return t.every(n=>!Ce(e,n))},isIn(e,t){return xe(e,t)},isNotIn(e,t){return!xe(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!Ce(e,t))throw new f(`'${d(e)}' does not have value '${d(t)}'.`,n);return e},lacksValue(e,t,n){if(Ce(e,t))throw new f(`'${d(e)}' has value '${d(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new f(`'${d(e)}' does not have values '${d(t)}'.`,n)}if(r.length)throw new f(`'${d(e)}' does not have values '${d(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new f(`'${d(e)}' has values '${d(r)}'.`,n);return e},isIn(e,t,n){if(!xe(e,t))throw new f(`'${d(e)}'

is not in

${d(t)}.`,n);return e},isNotIn(e,t,n){if(xe(e,t))throw new f(`'${d(e)}'

is in

${d(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${d(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new f(`'${d(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new f(`'${d(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${d(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${d(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${d(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ce(e,t))return e},lacksValue(e,t){if(!Ce(e,t))return e},hasValues(e,t){if(t.every(n=>Ce(e,n)))return e},lacksValues(e,t){if(!t.every(n=>Ce(e,n)))return e},isIn(e,t){if(xe(e,t))return e},isNotIn(e,t){if(!xe(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:A(Qe.hasValue),lacksValue:A(Qe.lacksValue),hasValues:A(Qe.hasValues),lacksValues:A(Qe.lacksValues),isIn:A(Qe.isIn),isNotIn:A(Qe.isNotIn),isEmpty:A(Qe.isEmpty),isNotEmpty:A(Qe.isNotEmpty)}},ss={isHttpStatus(e,t){if(!et(e,w))throw new f(`${d(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(et(e,w)){if(!xe(e,Pr[t]))throw new f(`${d(e)} is not a '${t}' HTTP status.`,n)}else throw new f(`${d(e)} is not a valid HTTP status.`,n)}},ic={assert:ss,check:{isHttpStatus(e){return et(e,w)},isHttpStatusCategory(e,t){return et(e,w)&&xe(e,Pr[t])}},assertWrap:{isHttpStatus(e,t){if(!et(e,w))throw new f(`${d(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(et(e,w)){if(!xe(e,Pr[t]))throw new f(`${d(e)} is not a '${t}' HTTP status.`,n)}else throw new f(`${d(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(et(e,w))return e},isHttpStatusCategory(e,t){if(et(e,w)&&xe(e,Pr[t]))return e}},waitUntil:{isHttpStatus:A(ss.isHttpStatus),isHttpStatusCategory:A(ss.isHttpStatusCategory)}},os={instanceOf(e,t,n){if(!(e instanceof t))throw new f(`'${d(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new f(`'${d(e)}' is an instance of '${t.name}'`,n)}},sc={assert:os,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new f(`'${d(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new f(`'${d(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:A(os.instanceOf),notInstanceOf:A(os.notInstanceOf)}},Lm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ee(e,t){return Lm.some(n=>{try{return n(e,t)}catch{return!1}})}const Lt={isKeyOf(e,t,n){if(!ee(t,e))throw new f(`'${String(e)}' is not a key of '${d(t)}'.`,n)},isNotKeyOf(e,t,n){if(ee(t,e))throw new f(`'${String(e)}' is a key of '${d(t)}'.`,n)},hasKey(e,t,n){if(!ee(e,t))throw new f(`'${d(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(ee(e,t))throw new f(`'${d(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new f(`'${d(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new f(`'${d(e)}' does not lack keys '${r.join(",")}'.`,n)}},oc={assert:Lt,check:{isKeyOf(e,t){return ee(t,e)},isNotKeyOf(e,t){return!ee(t,e)},hasKey:ee,lacksKey(e,t){return!ee(e,t)},hasKeys(e,t){return t.every(n=>ee(e,n))},lacksKeys(e,t){return t.every(n=>!ee(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!ee(t,e))throw new f(`'${String(e)}' is not a key of '${d(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(ee(t,e))throw new f(`'${String(e)}' is a key of '${d(t)}'.`,n);return e},hasKey(e,t,n){if(!ee(e,t))throw new f(`'${d(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(ee(e,t))throw new f(`'${d(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new f(`'${d(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new f(`'${d(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(ee(t,e))return e},isNotKeyOf(e,t){if(!ee(t,e))return e},hasKey(e,t){if(ee(e,t))return e},lacksKey(e,t){if(!ee(e,t))return e},hasKeys(e,t){if(t.every(n=>ee(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!ee(e,n)))return e}},waitUntil:{isKeyOf:A(Lt.isKeyOf),isNotKeyOf:A(Lt.isNotKeyOf),hasKey:A(Lt.hasKey),lacksKey:A(Lt.lacksKey),hasKeys:A(Lt.hasKeys),lacksKeys:A(Lt.lacksKeys)}};function _m(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:G(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,n)}function Rm(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:G(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,n)}const as={isLengthAtLeast:_m,isLengthExactly:Rm},ac={assert:as,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:G(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:G(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:G(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,n);return e},isLengthExactly:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:G(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,n);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:G(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:G(e).length)===t)return e}},waitUntil:{isLengthAtLeast:A(as.isLengthAtLeast),isLengthExactly:A(as.isLengthExactly)}},us={isDefined(e,t){if(e==null)throw new f(`'${d(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new f(`'${d(e)}' is not a nullish.`,t)}},uc={assert:us,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new f(`'${d(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new f(`'${d(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:A(us.isDefined),isNullish:A(us.isNullish)}},ge={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new f(`${e} is not within the bounds ${d({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new f(`${e} is not outside the bounds ${d({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new f(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new f(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new f(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new f(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new f(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new f(`${e} is within ±${n} of ${t}`,r)}},lc={assert:ge,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new f(`${e} is not within the bounds ${d({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new f(`${e} is not outside the bounds ${d({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new f(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new f(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new f(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new f(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new f(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new f(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:A(ge.isInBounds),isOutBounds:A(ge.isOutBounds),isInteger:A(ge.isInteger),isNotInteger:A(ge.isNotInteger),isAbove:A(ge.isAbove),isAtLeast:A(ge.isAtLeast),isBelow:A(ge.isBelow),isAtMost:A(ge.isAtMost),isNaN:A(ge.isNaN),isFinite:A(ge.isFinite),isInfinite:A(ge.isInfinite),isApproximately:A(ge.isApproximately),isNotApproximately:A(ge.isNotApproximately)}};function Om(e,t,n,r,i){return wr(...Ei(e,t,n,r,i),!1)}function Ei(e,t,n,r,i){const s=Array.isArray(n);return[s?e:tc,s?t:e,s?n:t,s?r:n,s?i:r]}function wr(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new f(`Output from '${t.name}' did not produce expected output with input: ${d(n)}: ${Te(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new f(`Output from '${t.name}' did not produce expected output with input: ${d(n)}: ${Te(a)}`,i)}}function Vm(e,t,n,r,i){try{const s=wr(...Ei(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Um(e,t,n,r,i){return wr(...Ei(e,t,n,r,i),!0)}function Wm(e,t,n,r,i){try{const s=wr(...Ei(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const ls=Symbol("not set");async function jm(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:tc,u=o?t:e,l=o?n:t,c=o?r:n,h=zl(o?i:r),m=o?s:i,p=Dn(h.timeout,{milliseconds:!0}).milliseconds,g=Dn(h.interval,{milliseconds:!0});let v=ls,T;async function $(){try{v=await wr(a,u,l,c,void 0,!0)}catch(U){v=ls,T=ce(U)}}const I=Date.now();for(;v===ls;)if(await $(),await zt(g),Date.now()-I>=p)throw pi(T,mi(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return v}const qm={output:Om},cc={assert:qm,check:{output:Vm},assertWrap:{output:Um},checkWrap:{output:Wm},waitUntil:{output:jm}},Rn={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${d(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${d(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${d(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${d(e)}' is not a Primitive.`,t)}},fc={assert:Rn,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${d(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${d(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${d(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${d(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:A(Rn.isNotPrimitive),isNotPropertyKey:A(Rn.isNotPropertyKey),isPrimitive:A(Rn.isPrimitive),isPropertyKey:A(Rn.isPropertyKey)}},On={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${d(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${d(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${d(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${d(e)}' is a Promise.`,t)}},dc={assert:On,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${d(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${d(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${d(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${d(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:A(On.isPromiseLike,!0),isNotPromiseLike:A(On.isNotPromiseLike,!0),isPromise:A(On.isPromise,!0),isNotPromise:A(On.isNotPromise,!0)}},cs={matches(e,t,n){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new f(`'${e}' matches ${t}`,n)}},hc={assert:cs,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new f(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:A(cs.matches,!0),mismatches:A(cs.mismatches,!0)}},se={isArray(e,t){if(!Array.isArray(e))throw new f(`'${d(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${d(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${d(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new f(`'${d(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new f(`'${d(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${d(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${d(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new f(`'${d(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${d(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new f(`'${d(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${d(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${d(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${d(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${d(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new f(`'${d(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${d(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${d(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new f(`'${d(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${d(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${d(e)}' is a undefined.`,t)}},mc={assert:se,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new f(`'${d(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${d(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${d(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new f(`'${d(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new f(`'${d(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${d(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${d(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new f(`'${d(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${d(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new f(`'${d(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${d(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${d(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${d(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${d(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new f(`'${d(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${d(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${d(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new f(`'${d(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${d(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${d(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:A(se.isArray),isBigInt:A(se.isBigInt),isBoolean:A(se.isBoolean),isFunction:A(se.isFunction),isNull:A(se.isNull),isNumber:A(se.isNumber),isObject:A(se.isObject),isString:A(se.isString),isSymbol:A(se.isSymbol),isUndefined:A(se.isUndefined),isNotArray:A(se.isNotArray),isNotBigInt:A(se.isNotBigInt),isNotBoolean:A(se.isNotBoolean),isNotFunction:A(se.isNotFunction),isNotNull:A(se.isNotNull),isNotNumber:A(se.isNotNumber),isNotObject:A(se.isNotObject),isNotString:A(se.isNotString),isNotSymbol:A(se.isNotSymbol),isNotUndefined:A(se.isNotUndefined)}};var Ee;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ee||(Ee={}));function yo(e,t,n){go(e,{noError:"No error.",notInstance:`'${d(e)}' is not an error instance.`},t,n)}function Ra(e,t,n){go(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${d(e)}' is not an error instance.`},t,n)}function go(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new f(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Te(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new f(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new f(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new f(t.notInstance,r);else throw new f(t.noError,r)}function Oa(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Te(e);if(typeof t.matchMessage=="string"){if(!n.includes(t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Ai(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=ce(u)}try{Ra(i,n,r),e===Ee.Assert?o():e===Ee.Check?o(!0):o(i)}catch(u){e===Ee.CheckWrap?o(void 0):e===Ee.Check?o(!1):a(ce(u))}})}catch(s){i=ce(s)}try{return Ra(i,n,r),e===Ee.Check?!0:e!==Ee.Assert?i:void 0}catch(s){if(e===Ee.CheckWrap)return;if(e===Ee.Check)return!1;throw s}}function zm(e,t,n){return Ai(Ee.Assert,e,t,n)}function Gm(e,t){return Ai(Ee.Check,e,t)}function Km(e,t,n){return Ai(Ee.AssertWrap,e,t,n)}function Hm(e,t,n){return Ai(Ee.CheckWrap,e,t,n)}const Zm=A(yo);function Ym(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${d(s)}'`);return Zm(i,async()=>{try{await s();return}catch(u){return ce(u)}},a,o)}const Jm={throws:zm,isError:yo},pc={assert:Jm,check:{throws:Gm,isError(e,t){return Oa(e,t)}},assertWrap:{throws:Km,isError(e,t,n){return go(e,{noError:"No error.",notInstance:`'${d(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:Hm,isError(e,t){if(Oa(e,t))return e}},waitUntil:{throws:Ym,isError:A(yo)}},wt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,fs={isUuid(e,t){if(!String(e).match(wt))throw new f(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(wt))throw new f(`'${String(e)}' is a UUID.`,t)}},wc={assert:fs,check:{isUuid(e){return!!String(e).match(wt)},isNotUuid(e){return!String(e).match(wt)}},assertWrap:{isUuid(e,t){if(!String(e).match(wt))throw new f(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(wt))throw new f(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(wt))return e},isNotUuid(e){if(!String(e).match(wt))return e}},waitUntil:{isUuid:A(fs.isUuid),isNotUuid:A(fs.isNotUuid)}},Qm={...Gl.assert,...Kl.assert,...Zl.assert,...Hl.assert,...sc.assert,...Yl.assert,...oc.assert,...ac.assert,...uc.assert,...lc.assert,...fc.assert,...dc.assert,...hc.assert,...mc.assert,...nc.assert,...pc.assert,...wc.assert,...rc.assert,...ic.assert,...cc.assert},bi=[Gl,Kl,Zl,Hl,sc,Yl,oc,ac,uc,lc,fc,dc,hc,mc,nc,pc,wc,rc,ic,cc],Xm=Object.assign({},...bi.map(e=>e.check)),D=Object.assign(function(t){return!!t},Xm);function e0(e,t,n){return Or(e,t,n,new Set)}function Or(e,t,n,r){if(e=Va(e),t=Va(t),D.isObject(e)&&D.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Or(G(e).sort(),G(t).sort(),n,r))return!1;let i=!1;const s=G(e).map(o=>{const a=Or(e[o],t[o],n,r);return D.isPromise(a)&&(i=!0),a});return Ua(i,s)}else if(D.isArray(e)&&D.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Or(o,t[a],n,r);return D.isPromise(u)&&(i=!0),u});return Ua(i,s)}else return n(e,t)}function Va(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Ua(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(D.isTrue))}catch(i){r(ce(i))}}):t.every(D.isTrue)}const t0=Object.assign({},...bi.map(e=>e.assertWrap)),n0=Object.assign(function(t,n){if(!t)throw new f("Assertion failed.",n);return t},t0);function r0(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const i0={tsType:r0},s0={assert:i0},o0={fail:e=>{throw new f("Failure triggered.",e)}},a0={...s0.assert,...Qm,...o0},$t=Object.assign(function(t,n){if(!t)throw new f("Assertion failed.",n)},a0),u0=Object.assign({},...bi.map(e=>e.checkWrap)),Dt=Object.assign(function(t){if(t)return t},u0),l0=Object.assign({},...bi.map(e=>e.waitUntil));Object.assign(function(t,n){return ql((r,i)=>{if(!r)throw new f("Assertion failed.",i)},[t,n],!1)},l0);function nr(e,t,n){if(t in e)return e[t];{const r=n();return D.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(ce(o))}}):(e[t]=r,r)}}function In(e){return G(e).map(t=>[t,e[t]])}function _s(e){return Object.fromEntries(e)}function Ci(e,t,n){return e.reduce((r,i,s,o)=>{const a=t(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function c0(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}function f0({min:e,max:t}){const{min:n,max:r}=Vu({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,h,m)=>c+h*256**m,0);while(l>=a);return n+l%i}const Wa=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Vr(e=16){let t="";for(let n=0;n<e;n++){const r=f0({min:0,max:Wa.length-1});t+=Wa[r]}return t}var ja;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ja||(ja={}));function Rs(e,t={}){try{const n=e();return n instanceof Promise?n.catch(r=>t.handleError?t.handleError(r):D.hasKey(t,"fallbackValue")?t.fallbackValue:ce(r)):n}catch(n){return t.handleError?t.handleError(n):D.hasKey(t,"fallbackValue")?t.fallbackValue:ce(n)}}function yc(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const d0="modulepreload",h0=function(e){return"/job-search/"+e},qa={},gc=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(n.map(u=>{if(u=h0(u),u in qa)return;qa[u]=!0;const l=u.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":d0,l||(h.as="script"),h.crossOrigin="",h.href=u,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((m,p)=>{h.addEventListener("load",m),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var le;(function(e){e.Standard="stdout",e.Error="stderr"})(le||(le={}));var _;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(_||(_={}));async function m0(){return await jl({async[at.Node](){const e=(await gc(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[_.Bold]:e.bold.open,[_.Debug]:e.blueBright.open,[_.Error]:e.red.open,[_.Faint]:e.gray.open,[_.Info]:e.cyan.open,[_.Mutate]:e.magenta.open,[_.NormalWeight]:"\x1B[22m",[_.Plain]:"",[_.Reset]:e.reset.open,[_.Success]:e.green.open,[_.Warning]:e.yellow.open}},[at.Web](){return Promise.resolve({[_.Bold]:"font-weight: bold",[_.Debug]:"color: blue",[_.Error]:"color: red",[_.Faint]:"color: grey",[_.Info]:"color: teal",[_.Mutate]:"color: magenta",[_.NormalWeight]:"",[_.Plain]:"",[_.Reset]:"",[_.Success]:"color: green",[_.Warning]:"color: orange"})}})}const be=await m0(),p0={[_.Bold]:{colors:[be.bold],logType:le.Standard},[_.Debug]:{colors:[be.debug],logType:le.Standard},[_.Faint]:{colors:[be.faint],logType:le.Standard},[_.Info]:{colors:[be.info],logType:le.Standard},[_.Mutate]:{colors:[be.mutate,be.bold],logType:le.Standard},[_.NormalWeight]:{colors:[be.normalWeight],logType:le.Standard},[_.Plain]:{colors:[],logType:le.Standard},[_.Reset]:{colors:[be.reset],logType:le.Standard},[_.Success]:{colors:[be.success,be.bold],logType:le.Standard},[_.Error]:{colors:[be.error,be.bold],logType:le.Error},[_.Warning]:{colors:[be.warning],logType:le.Error}};function w0(e){return e.replace(/,/g,"")}function y0(e){return typeof e=="number"?e:Number(typeof e=="string"?w0(e):e)}function za(e){const t=g0(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function g0(e){const t=y0(e);if(!isNaN(t))return t}const v0="px";function D0(e){return E0({value:e,suffix:v0})}function E0({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function A0({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function b0(){return await jl({async[at.Node](){const{inspect:e}=await gc(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[_.Reset].colors.join("")].join(""),css:void 0}}},[at.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:Ci(n.colorConfig[t].colors,o=>A0({value:o,suffix:";"}),D.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:o instanceof Error?Te(o):d(o)).join(`
`),n.omitColors?"":n.colorConfig[_.Reset].colors.join("")].join(""),css:r}}}})}const C0=await b0();function Fe({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function mn({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function $0(e,t){try{let n=!1;const r=In(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(n=!0,o):o?[o.key,o.value]:void 0}).filter(D.isTruthy);return n?new Promise(async(i,s)=>{try{const o=Ci(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},D.isTruthy);i(_s(o))}catch(o){s(ce(o))}}):_s(r)}catch(n){throw ce(n)}}function S0(e,t){return $0(e,(n,r)=>{const i=r,s=t(r,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function vc(e,...t){const n={...e};return t.forEach(r=>{r&&In(r).forEach(([i,s])=>{s!=null&&(n[i]=s)})}),n}const F0={colorConfig:p0,omitColors:!1},T0=Dc({[le.Error](){},[le.Standard](){}});function Dc(e,t){const n=vc(F0,t);function r(s){e[n.colorConfig[s.colorKey].logType](C0({...s,options:n}))}const i=S0(_,s=>(...o)=>r({args:o,colorKey:s}));return{...i,if(s){return s?i:T0}}}const k0=Cm(at.Node)?{[le.Error]({text:e}){process.stderr.write(e+`
`)},[le.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[le.Error]({text:e,css:t}){console.error(Fe({value:e,prefix:"%c"}),t)},[le.Standard]({text:e,css:t}){console.log(Fe({value:e,prefix:"%c"}),t)}},ds=Dc(k0);function Ec(...e){const t=e.join(""),n=c0(Array.from(t));return Array.from(n).join("")}function x0(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Ac(e,t){const n=Ec([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return N0(e,n)}function N0(e,t){const n=Ec(t);return typeof e=="string"?new RegExp(x0(e),n):new RegExp(e.source,n)}function bc(e,{caseSensitive:t}){return Ac(e,"")}function M0({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=Ac(bc(t,{caseSensitive:n}),"g"),s=[];return e.replace(i,(...o)=>{const a=o[o.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=o[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:a,length:u.length});const l=o[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),s}function I0(e,t,{caseSensitive:n}){const r=M0({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=bc(t,{caseSensitive:n});return e.split(i).reduce((o,a,u)=>{const l=r[u],c=o.concat(a);if(l){const h=e.slice(l.index,l.index+l.length);return c.concat(h)}else return c},[])}function P0(e,t){return e.split(t)}function hs(e,t){const{min:n,max:r}=Vu(t);return e>r?n:e<n?r:e}function Ye(e,t){let n=!1;const r=G(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),i[s]=o,i},{});return n?new Promise(async(i,s)=>{try{await Promise.all(G(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(ce(o))}}):r}function $i(e,t){const n=In(e).filter(([r,i])=>t(r,i,e));return _s(n)}function B0(e,t){return $i(e,n=>!t.includes(n))}function L0(e,t){return $i(e,n=>t.includes(n))}function Os(e){return G(e).map(t=>e[t])}function _0(e,t){return t.capitalizeFirstLetter?R0(e):e}function R0(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const O0={capitalizeFirstLetter:!1};var An;(function(e){e.Upper="upper",e.Lower="lower"})(An||(An={}));function V0(e){return e.toLowerCase()!==e.toUpperCase()}function Ga(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(V0(r)){if(t===An.Upper&&r!==r.toUpperCase()||t===An.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function U0(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return _0(r,vc(O0,t))}function W0(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=Ga(o,An.Lower,{rejectNoCaseCharacters:!0})||Ga(a,An.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function j0(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function ut(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function vo(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class q0{listeners={};getListenerCount(){return Os(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const i=this.listeners,s=D.isString(t)?t:t.type;function o(){return i[s]?.delete(n)||!1}function a(u,l){r.once&&o(),n(u,l)}return nr(i,s,()=>new Map).set(n,{listener:a,removeListener:o}),o}removeListener(t,n){const r=D.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(t){const n=this.listeners[t.type],r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),r}removeAllListeners(){const n=Os(this.listeners).reduce((r,i)=>{const s=i.size||0;return i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class Do extends q0{}function Cc(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Ka(e,t,n){return Cc(globalThis,e,t,n)}function z0(e){return[...e.children,...e.shadowRoot?.children??[]]}function G0(e){return e.matches(":focus")}function ii(e){if(e instanceof ShadowRoot)return ii(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:ii(t)}function $c(e,t){if(t(e))return e;const n=ii(e);if(n)return $c(n,t)}function Si(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,s=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}function K0(e){const t=ii(e);return t&&$c(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}const Sc=Symbol("no update");function Ha(e){return e!==Sc}class ms extends ut()("observable-value-update"){}class H0 extends ut()("observable-value-resolve"){}class Z0 extends ut()("observable-value-error"){}class Y0 extends vo("observable-destroy"){}class J0 extends vo("observable-callback-call"){}class Q0 extends ut()("observable-params-update"){}class Fc{listenTarget=new Do;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];return n===Sc||(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)?!1:(this.value=n,this.listenTarget.dispatch(new ms({detail:n})),!0)}listen(t,n){const r=i=>n(i.detail);return this.listenerMap.set(n,r),t&&n(this.value),this.listenTarget.listen(ms,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(ms,n)}destroy(){this.listenTarget.dispatch(new Y0),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function Eo(e,t){return e0(e,t,(n,r)=>D.isFunction(n)&&D.isFunction(r)?!0:D.strictEquals(n,r))}class X0 extends Fc{equalityCheck;waitingForValueDeferredPromise=new Ts;lastSetPromise;lastSetId=Vr();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck=t.equalityCheck||Eo,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const n=Vr();return this.lastSetId=n,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Ts,super.setValue(this.waitingForValueDeferredPromise.promise,D.strictEquals)),t.then(r=>{this.lastSetPromise!==t||this.lastSetId!==n||this.resolveValue(r)}).catch(r=>{if(this.lastSetPromise!==t||this.lastSetId!==n)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=ce(r);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return Ha(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,D.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=Vr(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new H0({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,D.strictEquals),this.dispatch(new Z0({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):Ha(t)?this.resolveValue(t):!1}catch(n){return this.rejectValue(ce(n)),!0}}listen(t,n){return super.listen(t,n)}}class un extends X0{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==un.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=t.equalityCheck||Eo,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:un.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===un.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(ce(t))}finally{this.dispatch(new J0)}}updateLastParams(t){try{return this.internalParams===un.NotSet||!this.equalityCheck(t,this.internalParams)?(this.internalParams=t,this.dispatch(new Q0({detail:this.internalParams})),!0):!1}catch(n){return this.setValue(ce(n)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return D.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function St(e){const t=k.fromObject(B0(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function Tc(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:ym(e.day),month:wm(e.month),year:e.year,hour:gm(e.hour),minute:vm(e.minute),second:Dm(e.second),millisecond:Em(e.millisecond),timezone:t??e.zoneName}}function rr(e,t){return Tc(St(e).plus(t))}const kc="__vir__shape__definition__key__do__not__use__in__actual__objects",Ao="__vir__shape__specifier__key__do__not__use__in__actual__objects",xc="__vir__custom__specifier__key__do__not__use__in__actual__objects";function bo(e){return D.hasKey(e,xc)}function Nc({customName:e,defaultValue:t,checker:n}){return{customName:e,checker:n,defaultValue:t,[xc]:!0,[Ao]:!0}}Nc({customName:"UUID",defaultValue:n0.isUuid("00000000-0000-1000-0000-000000000000"),checker:D.isUuid});function Co(e){return D.hasKey(e,kc)}var ue;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(ue||(ue={}));function ep(...e){return Ft(e,ue.And)}function Vs(...e){return Ft(e,ue.Enum)}function B(...e){return Ft(e,ue.Exact)}function Fi(...e){return Ft(e,ue.IndexedKeys)}function Y(...e){return Ft(e,ue.Or)}function tp(e){return Ft([e],ue.Unknown)}function ln(e,t){return Ft([e,t],ue.NumericRange)}function $e(e){return Ft([e],ue.Optional)}function Ti(e){return Je(e,ue.And)}function ki(e){return Je(e,ue.Class)}function xi(e){return Je(e,ue.Enum)}function Ni(e){return Je(e,ue.Exact)}function Mi(e){return Je(e,ue.IndexedKeys)}function Mc(e){return Je(e,ue.Tuple)}function yr(e){return Je(e,ue.Or)}function Ii(e){return Je(e,ue.Unknown)}function Ic(e){return Je(e,ue.NumericRange)}function si(e){return Je(e,ue.Optional)}function Je(e,t){const n=gr(e);return!!n&&n.specifierType===t}function Ft(e,t){return{[Ao]:!0,specifierType:t,parts:e}}function gr(e){if(!(!D.isObject(e)||!D.hasKey(e,Ao)))return e}class Za extends TypeError{name="DefaultValueConstructionError"}function np(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}class De extends TypeError{name="ShapeMismatchError"}function Pi(e,t,n={}){try{return Gt(e,t,n),!0}catch{return!1}}function Gt(e,t,n={},r=""){try{pe({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?pi(i,r):i}}function Us(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function pe({subject:e,shape:t,keys:n,options:r}){if(Ii(t))return!0;if(Co(t))return pe({subject:e,shape:t.shape,keys:n,options:r});if(bo(t)){if(!t.checker(e))throw new De(`Subject ${d(e)} does not match ${t.customName} shape.`);return!0}const i=Us(n);if(gr(e))throw new De(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(Mc(t)){if(!D.isArray(e))throw new De(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((o,a)=>{const u=e[a];return pe({keys:[...n,a],options:r,shape:o,subject:u})})}else{if(si(t))return pe({keys:n,options:r,shape:t.parts[0],subject:e});if(Ur(e,t,n,r)){if(D.isFunction(t))return D.isFunction(e);if(ki(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(yr(t)){const c=[];l=t.parts.some(h=>{try{const m=pe({subject:e,shape:h,keys:n,options:r});return Object.assign(a,m),!0}catch(m){if(m instanceof De)return c.push(m.message),!1;throw m}}),!l&&D.isLengthAtLeast(c,1)&&u.push(c[0])}else if(Ti(t))l=t.parts.every(c=>{try{const h=pe({subject:e,shape:c,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,h),!0}catch(h){if(h instanceof De)return u.push(h.message),!1;throw h}});else if(Ni(t)){const c=pe({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,c),l=!0}else{if(xi(t))throw new De(`Cannot compare an enum specifier to an object at ${i}`);if(D.isArray(t)&&D.isArray(o))l=o.every((c,h)=>{const m=t.some(p=>{try{return pe({subject:c,shape:p,keys:[...n,h],options:r}),!0}catch(g){if(g instanceof De)return u.push(g.message),!1;throw g}});return a[h]=m,m});else if(Mi(t)){const c=Ye(e,(h,m)=>(r.ignoreExtraKeys||pe({shape:t.parts[0].keys,subject:h,keys:[...n,h],options:r}),pe({shape:t.parts[0].values,subject:m,keys:[...n,h],options:r}),!0));Object.assign(a,c),l=!0}else{const c=rp({keys:n,options:r,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new De(mi(u));if(!l){const h=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>Us([...n,m])).join(",")}`;throw new De(h)}return r.ignoreExtraKeys||Object.entries(a).forEach(([c,h])=>{if(!h)throw new De(`subject as extra key '${c}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new De(`Subject does not match shape definition at key ${i}`)}return!0}function rp({keys:e,options:t,shape:n,subject:r}){const i=Us(e),s={};if(D.isObject(n)){const o=new Set(G(n)),a=new Set(G(r));o.forEach(u=>{(u in r||si(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new De(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],c=yr(l)?l.parts.includes(void 0):!1,h=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!h)throw new De(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&si(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=n[u];pe({subject:l,shape:c,keys:[...e,u],options:t}),s[u]=!0})}else throw new De(`Shape definition at ${i} was not an object.`);return s}function Ur(e,t,n,r,i){const s=gr(t);if(s){if(bo(s))return s.checker(e);if(Ic(s))return D.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if(ki(s))return e instanceof s.parts[0];if(Ti(s))return s.parts.every(o=>{try{return pe({subject:e,shape:o,keys:n,options:{...r,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(yr(s))return s.parts.some(o=>{try{return pe({subject:e,shape:o,keys:n,options:r}),!0}catch{return!1}});if(Ni(s))return D.isObject(e)?(pe({subject:e,shape:s.parts[0],keys:n,options:{...r,exactValues:!0}}),!0):e===s.parts[0];if(xi(s))return D.hasValue(Object.values(s.parts[0]),e);if(Mi(s)){if(!D.isObject(e))return!1;const o=ip(e,s,!!r.ignoreExtraKeys),a=Os(e).every(u=>{try{return pe({subject:u,shape:s.parts[0].values,keys:n,options:r}),!0}catch{return!1}});return o&&a}else if(Ii(s))return!0}return i?t===e:np(e,t)}function ip(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys,s=$o(t);if(D.isBoolean(s))return G(e).every(u=>Ur(u,i,[],{exactValues:!1,ignoreExtraKeys:n}));const o=r?s.every(u=>G(e).some(l=>Ur(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return G(e).every(u=>s.includes(u)?Ur(u,i,[],{exactValues:!1,ignoreExtraKeys:!1}):n)&&o}function $o(e){const t=e.parts[0].keys,n=gr(t);if(D.isPropertyKey(t))return!0;if(n){if(ki(n))return!1;if(Ti(n))return!1;if(yr(n)){const r=n.parts.map(i=>$o(Fi({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(D.isPropertyKey)}else if(Ni(n)){const r=n.parts.filter(D.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(xi(n))return Object.values(n.parts[0]);if(Mi(n))return!1;if(Ii(n))return!0}}return!1}function Ws(e){return Ot(e)}function Ot(e){const t=gr(e);if(bo(e))return e.defaultValue;if(t){if(Mc(t))return t.parts.map(n=>Ot(n));if(si(t))return Ot(t.parts[0]);if(Ic(t))return t.parts[0];if(ki(t)){const n=t.parts[0];try{return new n}catch(r){throw new Za(`Failed to create default value for classShape for class '${n.name}': ${Te(r)}`)}}else{if(yr(t)||Ni(t))return Ot(t.parts[0]);if(Ti(t))return t.parts.reduce((n,r)=>Object.assign(n,Ot(r)),{});if(xi(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Mi(t)){const n=$o(t);return!t.parts[0].required||D.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Ot(t.parts[0].values)]))}else{if(Ii(t))return t.parts[0]??{};throw new Za(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Co(e)?Ws(e.shape):e instanceof RegExp?e:D.isArray(e)?e.map(Ot):D.isObject(e)?Ye(e,(n,r)=>Ws(r)):e}function Ae(e,t=!1){if(Co(e))return e;const n={shape:e,isReadonly:t,get defaultValue(){return Ws(e)},[kc]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}const sp=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Pc=sp.reduce((e,t)=>(e[t]=t,e),{}),Bc=te.defaultZone.name,So=Pc.UTC,op=Ae({hour:ln(Xr.min,Xr.max),minute:ln(ei.min,ei.max),second:ln(ti.min,ti.max),millisecond:ln(ni.min,ni.max),timezone:Vs(Pc,So)}),ap=Ae({year:2023,month:ln(Jr.min,Jr.max),day:ln(Qr.min,Qr.max),timezone:So}),Lc=Ae(ep(ap,op));function up(e,t){if(!qn.isValidIANAZone(e))throw new f(`'${e}' is not a valid time zone`,t)}function lp(e){Gt(e,Lc),up(e.timezone),St(e)}function cp(e){try{return lp(e),!0}catch{return!1}}const fp=["L-y","LLL-y","LLLL-y"];function dp(e,t){const n=k.fromISO(e,{zone:t});if(n.isValid)return n;let r;return fp.some(i=>{const s=k.fromFormat(e,i,{zone:t});return s.isValid?(r=s,!0):!1}),r}function bn(e,t){const n=mp(e,t);if(!n?.isValid)throw new Error(`Failed to parse date input ${d(e)}`);return Tc(n,t)}function hp(e){const t=k.fromJSDate(new Date(e));if(t.isValid)return t}function mp(e,t){if(cp(e)&&(e=St(e).toMillis()),k.isDateTime(e))return e.setZone(t);if(D.isNumber(e))return k.fromMillis(e,{zone:So}).setZone(t);if(D.isString(e)){const n=dp(e,t);if(n)return n}else if(e instanceof Date)return k.fromJSDate(e).setZone(t);return hp(e)}N.Years+"",N.Quarters+"",N.Months+"",N.Weeks+"",N.Days+"",N.Hours+"",N.Minutes+"",N.Seconds+"",N.Milliseconds+"";function pp(e,t){return t===F.Week?rr(bn(St(rr(e,{days:1})).startOf(t),e.timezone),{days:-1}):bn(St(e).startOf(t),e.timezone)}function _c(e,t){return t===F.Week?rr(bn(St(rr(e,{days:1})).endOf(t),e.timezone),{days:-1}):bn(St(e).endOf(t),e.timezone)}Ae(Y({get:B(F.Month),in:Y(B(F.Year),B(F.Quarter))},{get:B(F.Week),in:Y(B(F.Year),B(F.Quarter),B(F.Month))},{get:B(F.Day),in:Y(B(F.Year),B(F.Quarter),B(F.Month),B(F.Week))},{get:B(F.Hour),in:Y(B(F.Year),B(F.Quarter),B(F.Month),B(F.Week),B(F.Day))},{get:B(F.Minute),in:Y(B(F.Year),B(F.Quarter),B(F.Month),B(F.Week),B(F.Day),B(F.Hour))},{get:B(F.Second),in:Y(B(F.Year),B(F.Quarter),B(F.Month),B(F.Week),B(F.Day),B(F.Hour),B(F.Minute))},{get:B(F.Millisecond),in:Y(B(F.Year),B(F.Quarter),B(F.Month),B(F.Week),B(F.Day),B(F.Hour),B(F.Minute),B(F.Second))}));function Ya(e,t){const n=[];if(t.forEach(r=>{e[r]==null&&n.push(r)}),n.length)throw new Error(`Missing required FullDate key(s): ${n.join(", ")}`)}function Ja(e){return St(e).toMillis()}function Fo(){return wp(Bc)}function wp(e){return bn(Date.now(),e)}var tt;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(tt||(tt={}));var js;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(js||(js={}));var Qa;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Qa||(Qa={}));const yp={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};L0(yp,We(js));te.defaultLocale;function To(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function gp(e,t){const n=D.hasKey(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),n].filter(D.isTruthy).join(":")}function qs(e,t,n){const r=e;if(t===tt.Date)return Ya(r,["year","month","day"]),To(r);if(t===tt.Time)return Ya(r,["hour","minute"]),gp(r,!1);if(t===tt.DateTime){const i=qs(e,tt.Date),s=qs(e,tt.Time);return`${i}T${s}`}else throw new Error(`Unexpected inputTyped: '${String(t)}'. Expected usage of FullDatePart, one of ${We(tt).join(", ")}.`)}Ae(Nc({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return vp(e)}}));function vp(e){return k.fromISO(e).toUTC().toISO()===e}function Dp(e,t){if(!e)return;const n=D.isString(e)?e:e.value;try{return bn(n,t)}catch{return}}const Ep=Ae({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:tp()});function ps(e){return Pi(e,Ep,{allowExtraKeys:!0})}class Rc extends Fc{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||Eo}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr=globalThis,ko=Wr.ShadowRoot&&(Wr.ShadyCSS===void 0||Wr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xo=Symbol(),Xa=new WeakMap;let Oc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==xo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ko&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Xa.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Xa.set(n,t))}return t}toString(){return this.cssText}};const qe=e=>new Oc(typeof e=="string"?e:e+"",void 0,xo),jr=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Oc(n,e,xo)},Ap=(e,t)=>{if(ko)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Wr.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},eu=ko?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return qe(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bp,defineProperty:Cp,getOwnPropertyDescriptor:$p,getOwnPropertyNames:Sp,getOwnPropertySymbols:Fp,getPrototypeOf:Tp}=Object,Bi=globalThis,tu=Bi.trustedTypes,kp=tu?tu.emptyScript:"",xp=Bi.reactiveElementPolyfillSupport,Yn=(e,t)=>e,oi={toAttribute(e,t){switch(t){case Boolean:e=e?kp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},No=(e,t)=>!bp(e,t),nu={attribute:!0,type:String,converter:oi,reflect:!1,hasChanged:No};Symbol.metadata??=Symbol("metadata"),Bi.litPropertyMetadata??=new WeakMap;class rn extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=nu){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Cp(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=$p(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nu}static _$Ei(){if(this.hasOwnProperty(Yn("elementProperties")))return;const t=Tp(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Yn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yn("properties"))){const n=this.properties,r=[...Sp(n),...Fp(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(eu(i))}else t!==void 0&&n.push(eu(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ap(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:oi).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:oi;this._$Em=i,this[i]=o.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??No)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}}rn.elementStyles=[],rn.shadowRootOptions={mode:"open"},rn[Yn("elementProperties")]=new Map,rn[Yn("finalized")]=new Map,xp?.({ReactiveElement:rn}),(Bi.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=globalThis,ai=Mo.trustedTypes,ru=ai?ai.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vc="$lit$",gt=`lit$${Math.random().toFixed(9).slice(2)}$`,Uc="?"+gt,Np=`<${Uc}>`,Kt=document,ir=()=>Kt.createComment(""),sr=e=>e===null||typeof e!="object"&&typeof e!="function",Io=Array.isArray,Mp=e=>Io(e)||typeof e?.[Symbol.iterator]=="function",ws=`[ 	
\f\r]`,Vn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,iu=/-->/g,su=/>/g,_t=RegExp(`>|${ws}(?:([^\\s"'>=/]+)(${ws}*=${ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ou=/'/g,au=/"/g,Wc=/^(?:script|style|textarea|title)$/i,Ip=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Pp=Ip(1),_e=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),uu=new WeakMap,Ut=Kt.createTreeWalker(Kt,129);function jc(e,t){if(!Io(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ru!==void 0?ru.createHTML(t):t}const Bp=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=Vn;for(let a=0;a<n;a++){const u=e[a];let l,c,h=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===Vn?c[1]==="!--"?o=iu:c[1]!==void 0?o=su:c[2]!==void 0?(Wc.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=_t):c[3]!==void 0&&(o=_t):o===_t?c[0]===">"?(o=i??Vn,h=-1):c[1]===void 0?h=-2:(h=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?_t:c[3]==='"'?au:ou):o===au||o===ou?o=_t:o===iu||o===su?o=Vn:(o=_t,i=void 0);const p=o===_t&&e[a+1].startsWith("/>")?" ":"";s+=o===Vn?u+Np:h>=0?(r.push(l),u.slice(0,h)+Vc+u.slice(h)+gt+p):u+gt+(h===-2?a:p)}return[jc(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class or{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,c]=Bp(t,n);if(this.el=or.createElement(l,r),Ut.currentNode=this.el.content,n===2||n===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Ut.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Vc)){const m=c[o++],p=i.getAttribute(h).split(gt),g=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:g[2],strings:p,ctor:g[1]==="."?_p:g[1]==="?"?Rp:g[1]==="@"?Op:Li}),i.removeAttribute(h)}else h.startsWith(gt)&&(u.push({type:6,index:s}),i.removeAttribute(h));if(Wc.test(i.tagName)){const h=i.textContent.split(gt),m=h.length-1;if(m>0){i.textContent=ai?ai.emptyScript:"";for(let p=0;p<m;p++)i.append(h[p],ir()),Ut.nextNode(),u.push({type:2,index:++s});i.append(h[m],ir())}}}else if(i.nodeType===8)if(i.data===Uc)u.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(gt,h+1))!==-1;)u.push({type:7,index:s}),h+=gt.length-1}s++}}static createElement(t,n){const r=Kt.createElement("template");return r.innerHTML=t,r}}function Cn(e,t,n=e,r){if(t===_e)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=sr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Cn(e,i._$AS(e,t.values),i,r)),t}class Lp{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Kt).importNode(n,!0);Ut.currentNode=i;let s=Ut.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new vr(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new Vp(s,this,t)),this._$AV.push(l),u=r[++a]}o!==u?.index&&(s=Ut.nextNode(),o++)}return Ut.currentNode=Kt,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class vr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Cn(this,t,n),sr(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==_e&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mp(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&sr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Kt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=or.createElement(jc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new Lp(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=uu.get(t.strings);return n===void 0&&uu.set(t.strings,n=new or(t)),n}k(t){Io(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new vr(this.O(ir()),this.O(ir()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Li{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=H}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Cn(this,t,n,0),o=!sr(t)||t!==this._$AH&&t!==_e,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=Cn(this,a[r+u],n,u),l===_e&&(l=this._$AH[u]),o||=!sr(l)||l!==this._$AH[u],l===H?t=H:t!==H&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _p extends Li{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class Rp extends Li{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class Op extends Li{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Cn(this,t,n,0)??H)===_e)return;const r=this._$AH,i=t===H&&r!==H||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==H&&(r===H||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Vp{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Cn(this,t)}}const Up=Mo.litHtmlPolyfillSupport;Up?.(or,vr),(Mo.litHtmlVersions??=[]).push("3.2.1");const Wp=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new vr(t.insertBefore(ir(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jn=class extends rn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wp(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _e}};Jn._$litElement$=!0,Jn.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Jn});const jp=globalThis.litElementPolyfillSupport;jp?.({LitElement:Jn});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Pn=e=>(...t)=>({_$litDirective$:e,values:t});class Yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qp={attribute:!0,type:String,converter:oi,reflect:!1,hasChanged:No},zp=(e=qp,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(r==="setter"){const{name:o}=n;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+r)};function Gp(e){return(t,n)=>typeof n=="object"?zp(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=Pn(class extends Yt{constructor(e){if(super(e),e.type!==Po.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return _e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc=e=>e??H;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zs extends Yt{constructor(t){if(super(t),this.it=H,t.type!==Po.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||t==null)return this._t=void 0,this.it=t;if(t===_e)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}zs.directiveName="unsafeHTML",zs.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lu extends zs{}lu.directiveName="unsafeSVG",lu.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kp(e,t,n){return e?t(e):n?.(e)}class Hp extends Jn{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function Jt(e){if(D.isObject(e))return Ye(e,(n,r)=>{if(!D.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(W0(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?qe(n):n.startsWith("-")?jr`-${qe(n)}`:jr`--${qe(n)}`;return{name:o,value:jr`var(${o}, ${qe(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${Jt.name}' function.`)}function Zp(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function Gs(e){return D.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Bo(e){return D.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function zc(e){return Ci(e,t=>{if(Gs(t))return t.definition;if(Bo(t))return t.tagInterpolationKey||t},D.isTruthy)}const Gc=new WeakMap;function Yp(e,t){const n=zc(t);return Kc(Gc,[e,...n]).value?.template}function Jp(e,t,n){const r=zc(t);return Zc(Gc,[e,...r],n)}function Kc(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Hc(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Kc(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Hc(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Zc(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Hc(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Zc(u,t,n,r+1)}function Yc(e,t,n){const r=Yp(e,t),i=r??n();if(!r){const a=Jp(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=Zp(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Jc(e,t,n,r){const i=[],s=[],o=[],a=[];return e.forEach((l,c)=>{const h=i.length-1,m=i[h],p=c-1,g=t[p];r&&r(l);let v,T=[];if(typeof m=="string"&&(v=n(m,l,g),v)){i[h]=[m,v.replacement].join(""),o.push(p);const I=v.getExtraValues;T=I?I(g):[],T.length&&I?(i[h]+=" ",T.forEach((U,q)=>{q&&i.push(" ")}),a.push(U=>{const q=U[p],Z=I(q);return{index:p,values:Z}}),i.push(l)):i[h]+=l}v||i.push(l);const $=e.raw[c];v?(s[h]=[s[h],v.replacement,$].join(""),T.length&&T.forEach(()=>{s.push("")})):s.push($)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const c=a.flatMap(h=>h(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function Qp(...[e,t,n]){if(Bo(n))return{replacement:n.tagName,getExtraValues:void 0}}function Xp(e,t){return Jc(e,t,Qp)}function V(e,...t){const n=Yc(e,t,()=>Xp(e,t));return jr(n.strings,...n.values)}const ew={allowPolymorphicState:!1};function Qc(e,t){const n=e.instanceState;G(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&G(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}function cu(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class tw extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function Dr(){return e=>class extends tw{static type=e;_type=e;constructor(t){super(e,t)}}}function Re(){return Dr()}function nw(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Dr()([e,r].join("-"));return n[r]=i,n},{}):{}}function rw(e){return e?Ye(e,t=>t):{}}function Xc(e,t){t in e||Gp()(e,t)}function iw(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function fu(e,t){const n=e;function r(o){t?iw(o,e,e.tagName):Xc(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set(o,a,u){r(a);const l=n[a];function c(m){o[a]=m,n[a]=m}const h=e.observablePropertyListenerMap[a];if(l!==u&&ps(l)&&h&&l.removeListener(h),ps(u))if(h)u.listen(!1,h);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,u.listen(!1,m)}else ps(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function sw({hostClassNames:e,cssVars:t}){return{hostClasses:Ye(e,(n,r)=>({name:qe(r),selector:qe(`:host(.${r})`)})),cssVars:t}}function ow({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&G(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function aw({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(o){G(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:n,slotNames:r,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function uw(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}function Lo(e){if(!D.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!D.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...ew,...e.options},n=nw(e.tagName,e.events),r=rw(e.hostClasses);e.hostClasses&&cu(e.tagName,e.hostClasses),e.cssVars&&cu(e.tagName,e.cssVars);const i=e.cssVars?Jt(e.cssVars):{},s=uw(e.slotNames),o=typeof e.styles=="function"?e.styles(sw({hostClassNames:r,cssVars:i})):e.styles||V``,a=e.render;function u(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends Hp{static elementOptions=t;static tagName=e.tagName;static styles=o;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return aw({element:this,eventsMap:n,cssVars:i,slotNamesMap:s})}static assign=u;static events=n;static render=a;static hostClasses=r;static cssVars=i;static init=e;static slotNames=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(c);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");G(m).forEach(p=>{Xc(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=a(c);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return ow({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},h}catch(c){const h=pi(c,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,Te(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{D.hasKey(c,"destroy")&&D.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){Qc(this,c)}observablePropertyListenerMap={};instanceInputs=fu(this,!1);instanceState=fu(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:U0(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Tt(...e){return $t.isEmpty(e),t=>{const n=t;if(!D.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return Lo({...n,options:{...n.options}})}}var Qn;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Qn||(Qn={}));class lw extends un{get settledValue(){if(this.isSettled())return this.value}get state(){return this.isResolved()?Qn.Resolved:this.isError()?Qn.Rejected:Qn.Waiting}isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}}function cw(e){return new lw(e)}function _i(e,t){return Ks(e,t),e.element}function fw(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ks(e,t){const n=fw(e),r=n?`: in ${n}`:"";if(e.type!==Po.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function dw(e){const t=Pn(class extends Yt{element;constructor(n){super(n),this.element=_i(n,e)}render(n){return this.element.setAttribute(e,n),_e}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function W(e,t){return hw(e,t)}const hw=Pn(class extends Yt{element;lastListenerMetaData;constructor(e){super(e),this.element=_i(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),_e}}),ys="onResize",ef=Pn(class extends Yt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),Ks(e,ys)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${ys} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Ks(e,ys),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function cn(e,t,n){return Kp(e,()=>t,()=>n)}const{attributeDirective:mw}=dw("data-test-id"),Kn=mw;G({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",InputsType:"",render:"",slotNames:"",StateType:"",styles:"",tagName:"",UpdateStateType:""});function pw(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return{defineElement:(...r)=>i=>(t(i),Tt(...r)(n(i))),defineElementNoInputs:r=>(t(r),Lo(n(r)))}}function ww(e,t){return yw(void 0,e)}const yw=Pn(class extends Yt{element;constructor(e){super(e),this.element=_i(e,"assign")}render(e,t){return Qc(this.element,t),_e}}),gw={};function vw(e,t){return t.map((n,r)=>{const i=e[r],s=e[r+1];if(i&&s){const{shouldHaveTagNameHere:o}=tf(i,s);if(o&&D.isString(n))return{tagName:n,tagInterpolationKey:nr(gw,n,()=>({tagName:n}))}}return n})}function tf(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function Dw(...[e,t,n]){const r=Gs(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=tf(e,t),o=Bo(r);if(o&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!s||!o?void 0:{replacement:r.tagName,getExtraValues(u){const l=Gs(u)?u.inputs:void 0;return[i&&l?ww(l):void 0].filter(D.isTruthy)}}}function Ew(e){}function Aw(e){return Jc(e.strings,e.values,Dw,Ew)}function C(e,...t){const n=vw(e,t),r=Pp(e,...n),i=Yc(e,n,()=>Aw(r));return{...r,strings:i.strings,values:i.values}}const bw={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},Cw=Object.keys(bw),$w={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Sw=Object.keys($w),Fw={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},Tw=Object.keys(Fw);Array.from(new Set([...Cw,...Tw,...Sw].sort()));const du="vira-",{defineElement:kw}=pw({assertInputs:e=>{if(!e.tagName.startsWith(du))throw new Error(`Tag name should start with '${du}' but got '${e.tagName}'`)}}),lt=kw,E=Jt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ne({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const xw=ne({name:"Check24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),He=Jt({"vira-form-input-radius":"8px"}),Ri=V`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Ze=Jt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ht=Jt({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":V`calc(${He["vira-form-input-radius"].value} + 4px)`});function _o({selector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=2}){const i=qe(D0(r+n+t));return V`
        ${qe(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${Ht["vira-focus-outline-color"].value};
            border-radius: ${Ht["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Et=Jt({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Ht["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),nf=V`
    padding: 0;
    margin: 0;
`,vt=V`
    ${nf};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,hu=V`#e2e2e2`,rf={menuShadow:V`
        filter: drop-shadow(0px 5px 5px ${hu});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:V`
        filter: drop-shadow(0px -5px 5px ${hu});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},ar=V`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,J=lt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>V`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),gs=lt()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>V`
        :host {
            display: flex;
            ${ar};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${J} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${J} {
            transition: opacity
                ${Ze["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${He["vira-form-input-radius"].value}
                ${He["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${He["vira-form-input-radius"].value}
                ${He["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return C`
            <div class="option">
                <${J.assign({icon:xw})}></${J}>
                <slot>${e.label}</slot>
            </div>
        `}}),Hs="group";function Nw(e,t,n){return[e,t,n].filter(r=>r!==void 0).join(",")||""}function Mw(e){const[t,n,r]=e.split(",");return n?{type:"2d",xCord:za(t),yCord:za(n),isGroup:r===Hs}:{type:"1d",isGroup:t===Hs}}function Iw(e,t){Object.entries(t).forEach(([n,r])=>{D.isBoolean(r)&&r?e.setAttribute(n,""):D.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const Pw=Pn(class extends Yt{element;lastKey;constructor(e){super(e),this.element=_i(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),_e}}),Zs={name:"data-nav"},sn="nav-activated",Ys={js:{click(e){return`${e}.${sn}`},selected(e){return`${e}:focus`}},css:{click(e){return V`
                ${qe(Ys.js.click(e))}
            `},selected(e){return V`
                ${qe(Ys.js.selected(e))}
            `}}},Bw={activateKeys:["Space","Return","Enter"]};function Lw(){sf=yc(Bw)}let sf;Lw();function mu(e){return sf.activateKeys.some(t=>{const n=t.toLowerCase();return n===e.key.toLowerCase()||n===e.code.toLowerCase()})}function _w(e,t){const n=Nw(e,t);return Pw(`${e}-${t}`,r=>{const i=r.hasAttribute("tabindex")||e===Hs?{}:{tabindex:0},s={[Zs.name]:n,...i};$t.instanceOf(r,HTMLElement),Iw(r,s),r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",o=>{o.target===r&&r.focus()},!0),r.addEventListener("mouseleave",o=>{o.target===r&&r.blur()},!0),r.addEventListener("mousedown",o=>{o.target===r&&r.classList.add(sn)},!0),r.addEventListener("mouseup",o=>{o.target===r&&r.classList.remove(sn)},!0),r.addEventListener("blur",()=>{r.classList.remove(sn)},!0),r.addEventListener("keydown",o=>{o.target===r&&mu(o)&&r.classList.add(sn)},!0),r.addEventListener("keyup",o=>{o.target===r&&mu(o)&&r.classList.remove(sn)},!0)})}function Rw(e,t){return of([],e,t)}function of(e,t,n){return!t||t.type==="child"?!1:t.type==="1d"?pu(t.children,t,0,e,n):t.children.some((r,i)=>pu(r,t,i,e,n))}function pu(e,t,n,r,i){return e.some((s,o)=>{const a=D.hasKey(t,"isRoot")&&t.isRoot?r:[t,...r];return i(a,s,{x:o,y:n})?!0:of(a,s,i)})}function Ow(e){return e.toReversed().find(t=>!t.isGroup)}function ur(e){if(!e)return;let t,n,r;Rw(e,(o,a,u)=>G0(a.element)?(t=o,n=a,r=u,!0):!1);const i=t?t[0]||e:void 0,s=t?Ow(t)||e:void 0;if(!(!n||!i||!r||!s||!t))return{node:n,parent:i,nonGroupParent:s,ancestors:t}}function lr(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function wu(e,t){return e>t}function yu(e,t){return e<t}var Ne;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Ne||(Ne={}));var re;(function(e){e.Enter="enter",e.Exit="exit",e.Navigate="navigate",e.Pibling="pibling"})(re||(re={}));function Ro(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?Ro(t):t}function gu(e,t,n){if(!e)return{success:!1,reason:"no nav tree",direction:t,navAction:re.Navigate};const r=ur(e);if(!r){const a=Ro(e);return a?(lr(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element,direction:t,navAction:re.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:re.Navigate}}const{nextNode:i,requiresWrapping:s}=af(r.parent,t,r.node),o=n?!0:!s;return i&&o?(lr(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s,direction:t,navAction:re.Navigate}):i?o?{success:!1,reason:"no conditions matched",direction:t,navAction:re.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:re.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:re.Navigate}}function af(e,t,n){if(t===Ne.Down||t===Ne.Up){const i=t===Ne.Down?yu:wu,s=t===Ne.Down?1:-1,o=e.type==="1d"?0:hs(n.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?hs(n.coords.x+s,{min:0,max:e.children.length-1}):a&&n.coords.x>=a.length?a.length-1:n.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],c=e.type==="1d"?i(u.x,n.coords.x):i(u.y,n.coords.y);return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:c}}else{const i=t===Ne.Right?yu:wu,s=t===Ne.Right?1:-1,o=e.type==="1d"?e.children:e.children[n.coords.y];$t.isDefined(o,`No current row found at y index: '${n.coords.y}'`);const a={x:hs(n.coords.x+s,{min:0,max:o.length-1}),y:n.coords.y},u=i(a.x,n.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:u}}}function Vw(e,t,n,r){const i=D.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from",direction:n,navAction:re.Pibling};const{nextNode:o,requiresWrapping:a}=af(i,n,s),u=o?.isGroup?Ro(o):o,l=r?!0:!a;return u?l?(lr(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a,direction:n,navAction:re.Pibling}):{success:!1,reason:"wrapping blocked",direction:n,navAction:re.Pibling}:{success:!1,reason:"no node to navigate to",direction:n,navAction:re.Pibling}}function Uw(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:re.Enter};const t=ur(e);if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:re.Enter};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:re.Enter};const n=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return n?(lr(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:re.Enter}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:re.Enter}}function Ww(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:re.Exit};const t=ur(e);if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:re.Exit};const n=t.nonGroupParent;return n.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to",direction:void 0,navAction:re.Exit}:(lr(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:re.Exit})}class jw extends ut()("nav-exit-event"){}class qw extends ut()("nav-exit-event"){}class zw extends ut()("navigate-event"){}class Gw extends ut()("navigate-pibling-event"){}function uf(e){const t=[];return z0(e).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=uf(n),i=n.hasAttribute(Zs.name)?Mw(n.getAttribute(Zs.name)||""):void 0;if(!i){t.push(...r);return}t.push({children:r,element:n,navValue:i})}),t}function Kw(e){const t=uf(e);return lf(t)}function lf(e){if(!D.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(n=>{const r=n.children.length?lf(n.children):void 0;if(n.navValue.isGroup&&!r){const o=new Error("group nav has no children");throw console.error(o,n),o}const i=Hw(n,t.children),s=r?{element:n.element,children:r.children,type:r.type,isGroup:n.navValue.isGroup,coords:i}:{element:n.element,type:"child",coords:i,isGroup:!1};if(n.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if($t.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(n.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==n.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,n),o}}),t}function Hw(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}class cf extends Do{rootElement;constructor(t){super(),this.rootElement=t}getCurrentlyFocused(){return ur(this.buildNavTree())}buildNavTree(){return Kw(this.rootElement)}navigate({direction:t,allowWrapping:n}){const r=gu(this.buildNavTree(),t,n);return this.dispatch(new zw({detail:r})),r}enterInto(){const t=Uw(this.buildNavTree());return this.dispatch(new qw({detail:t})),t}exitOutOf(){const t=Ww(this.buildNavTree());return this.dispatch(new jw({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){const r=this.buildNavTree(),i=ur(r),o={...!i||!r?gu(r,n,t):Vw(r,i,n,t),navAction:re.Pibling};return this.dispatch(new Gw({detail:o})),o}}const Zw={option:"dropdown-option"},kr=lt()({tagName:"vira-dropdown-options",events:{selectionChange:Re()},styles:V`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${He["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Et["vira-form-background-color"].value};
            border: 1px solid ${Et["vira-form-border-color"].value};
            color: ${Et["vira-form-foreground-color"].value};
            ${rf.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Ys.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${Et["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${gs} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Ri};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=e.options.map(i=>{const s=i.template||C`
                    <${gs.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${gs}>
                `;return C`
                <div
                    class="dropdown-item ${ui({disabled:!!i.disabled})}"
                    ${Kn(Zw.option)}
                    title=${qc(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?H:_w()}
                    ${W("mousedown",o=>{o.stopPropagation()})}
                    ${W("mouseup",o=>{o.stopPropagation(),i.disabled||t(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return C`
            <slot>${r}</slot>
        `}});ne({name:"Chat24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
        </svg>
    `});const Yw=ne({name:"ChevronUp24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${E["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${E["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Jw=ne({name:"CloseX24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ne({name:"Commit24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});ne({name:"Document24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});ne({name:"Element16Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ne({name:"Element24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Qw=ne({name:"EyeClosed24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${E["vira-icon-fill-color"].value}
            stroke=${E["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${E["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Xw=ne({name:"EyeOpen24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${E["vira-icon-fill-color"].value}
            stroke=${E["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${E["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),ey=ne({name:"Loader24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ty=V`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Ze["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Oo=ne({name:"LoaderAnimated24Icon",svgTemplate:C`
        <style>
            ${ty}
        </style>
        ${ey.svgTemplate}
    `});ne({name:"Options24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const ny=ne({name:"Pencil24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `});ne({name:"Shield24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerLoud24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerMedium24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerMuted24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"SpeakerQuiet24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
        </svg>
    `});ne({name:"Star24Icon",svgTemplate:C`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
                fill=${E["vira-icon-fill-color"].value}
            />
        </svg>
    `});const ry=ne({name:"StatusFailure24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ne({name:"StatusInProgress24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});ne({name:"StatusSuccess24Icon",svgTemplate:C`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});class iy extends Rc{constructor(){super({defaultValue:document.hidden,equalityCheck:D.strictEquals}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const t=n=>this.updateVisibility(n);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const n=oy.includes(t.type),r=sy.includes(t.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const sy=["blur","focusout","pagehide"],oy=["focus","focusin","pageshow"],ay=new iy;function uy(e,t){return ay.listen(e,t)}const vu={top:0,left:0,right:0,bottom:0};class ff extends vo("hide-pop-up"){}class df extends ut()("nav-select"){}class ly{listenTarget=new Do;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const n=new cf(t);this.cleanupCallbacks=[uy(!1,r=>{r||this.removePopUp()}),Ka("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ka("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ne.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ne.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ne.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:Ne.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new df({detail:s.node.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new ff)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=K0(t);$t.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=Ye(vu,p=>s[p]),h=Ye(vu,p=>{const g=l[p],v=c[p];return Math.abs(g-v)}),m=h.top>h.bottom+r.verticalDiffThreshold&&h.bottom<r.minDownSpace;return this.attachGlobalListeners(t),{popDown:!m,positions:{container:l,root:c,diff:h}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function cy({selected:e,options:t,isMultiSelect:n}){if(e.length&&t.length){const r=t.filter(i=>e.includes(i.id));return r.length>1&&!n?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),r.slice(0,1)):r}else return[]}function fy(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${j0(n)}`)}function Du(e,t,n){return n?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]}function Eu({open:e,emitEvent:t},{updateState:n,popUpManager:r,dispatch:i,host:s}){e?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),t&&i(e)}const xr={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"};lt()({tagName:"vira-dropdown",state(){return{showPopUpResult:void 0,popUpManager:new ly,navController:void 0}},hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>V`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Ht["vira-focus-outline-color"].name}: ${Et["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${vt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${He["vira-form-input-radius"].value};
            transition: border-radius
                ${Ze["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${_o({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${Ze["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${Et["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${ar};
            border-radius: inherit;
            background-color: ${Et["vira-form-background-color"].value};
            color: ${Et["vira-form-foreground-color"].value};
        }

        .open-upwards ${kr} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${rf.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Ri}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:Re(),openChange:Re()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:s}){e.popUpManager.listen(ff,()=>{if(t({showPopUpResult:void 0}),!r.isDisabled){const o=n.shadowRoot.querySelector(".dropdown-wrapper");$t.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(df,o=>{const a=o.detail.x,u=r.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);r.isMultiSelect||Eu({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:n,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Du(u.id,r.selected,!!r.isMultiSelect)))}),t({navController:new cf(n)})},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:s}){fy(r.options);function o(g){Eu(g,{dispatch:v=>{e(new t.openChange(v))},host:s,popUpManager:n.popUpManager,updateState:i})}r.isDisabled?o({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?o({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=cy(r),u=r.icon?C`
                  <${J.assign({icon:r.icon})}
                      ${Kn(xr.icon)}
                  ></${J}>
              `:"",l=n.showPopUpResult?n.showPopUpResult.popDown?V`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:V`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function c(){o({emitEvent:!0,open:!n.showPopUpResult})}const h=!a.length,m=r.selectionPrefix&&!h?C`
                      <span class="selected-label-prefix" ${Kn(xr.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",p=h?r.placeholder||"":a.map(g=>g.label).join(", ");return C`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${ui({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                ${Kn(xr.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${W("keydown",g=>{!n.showPopUpResult&&g.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${W("click",g=>{g.detail===0&&c()})}
                ${W("mousedown",g=>{g.button===0&&c()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${ui({"using-placeholder":h})}"
                        title=${qc(h?p:void 0)}
                    >
                        ${m} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${J.assign({icon:Yw})}
                            class="trigger-icon"
                        ></${J}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${cn(!!n.showPopUpResult,C`
                            <${kr.assign({options:r.options,selectedOptions:a})}
                                ${W(kr.events.selectionChange,g=>{r.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Du(g.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${Kn(xr.options)}
                            ></${kr}>
                        `)}
                </div>
            </button>
        `}});Tt()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>V`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${t["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,render({inputs:e}){return C`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var cr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(cr||(cr={}));const Be=lt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===cr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>V`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ar};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Ht["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Ri};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${vt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${He["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Ze["vira-interaction-animation-duration"].value},
                background-color
                    ${Ze["vira-interaction-animation-duration"].value},
                border-color ${Ze["vira-interaction-animation-duration"].value};
        }

        ${_o({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${J} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?C`
                  <${J.assign({icon:e.icon})}></${J}>
              `:"",n=e.text?C`
                  <span class="text-template">${e.text}</span>
              `:"";return C`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});lt()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>V`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${vt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ze["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Re()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:s}){const o=s.expanded?V`
                  height: ${e.contentHeight}px;
              `:V`
                  height: 0;
              `;return C`
            <button
                class="header-wrapper"
                ${W("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${ef(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});lt()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:Re(),imageError:Re()},styles:({hostClasses:e})=>V`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?C`
                  <slot class="status-wrapper" name=${s.error}>
                      <${J.assign({icon:ry})} class="error"></${J}>
                  </slot>
              `:t.loadedUrls[o]?void 0:C`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${J.assign({icon:Oo})}></${J}>
                    </slot>
                `;return C`
            ${cn(!!a,a)}
            <img
                class=${ui({hidden:!!a})}
                ${W("load",async()=>{e._debugLoadDelay&&await zt(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[o]:!0}}),r(new i.imageLoad)})}
                ${W("error",async u=>{e._debugLoadDelay&&await zt(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[o]:!0}}),r(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function Js({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Js({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function dy({value:e,allowed:t,blocked:n}){const r=t?Js({input:e,matcher:t}):!0,i=n?Js({input:e,matcher:n}):!1;return r&&!i}function Qs(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(dy({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function hy({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const s=Si(n,HTMLInputElement),o=D.hasKey(n,"data")&&Dt.isString(n.data)||"";if(o){const{blocked:u}=Qs({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=Qs({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var qt;(function(e){e.Default="text",e.Password="password",e.Email="email"})(qt||(qt={}));const pn=lt()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Ht["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>V`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ht["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ri};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${vt};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${ar};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${vt};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${He["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Ze["vira-interaction-animation-duration"].value};
            }

            label {
                ${vt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${He["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${_o({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${vt};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${ar};
            }

            button {
                ${vt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Ze["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,events:{valueChange:Re(),inputBlocked:Re()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:s}=Qs({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?C`
                  <${J.assign({icon:e.icon})} class="left-side-icon"></${J}>
              `:"",a=e.fitText?V`
                  width: ${n.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type===qt.Password;return C`
            <label>
                ${o}
                ${cn(!!e.fitText,C`
                        <span
                            class="size-span"
                            ${ef(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${my(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${W("input",l=>{hy({inputs:e,previousValue:s,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${cn(!!(e.showClearButton&&e.value),C`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${W("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${J.assign({icon:Jw})}></${J}>
                        </button>
                    `)}
                ${cn(e.type===qt.Password,C`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${W("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${J.assign({icon:n.showPassword?Xw:Qw})}></${J}>
                        </button>
                    `)}
                ${cn(!!e.suffix,C`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function my(e,t){return e===qt.Password&&t?qt.Default:e||qt.Default}const vs=lt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>V`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(n){if(!e.route)return;const r=e.route.router.setRouteOnDirectNavigation(e.route.route,n);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:r?"instant":"smooth"})}if(e.link?.newTab)return C`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return C`
                <a href=${n} rel="noopener noreferrer" ${W("click",t)}>
                    <slot></slot>
                </a>
            `}}});var Me=(e=>(e.Entry="entry",e.Raw="raw",e.View="view",e))(Me||{});const py={entry:"New",raw:"Raw",view:"View All"};function wy(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var $n=wy();function yy(){try{if(!$n||!$n.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Vo(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const x=Promise;function K(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function on(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function ct(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function Uo(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Xs="local-forage-detect-blob-support";let Nr;const Le={},gy=Object.prototype.toString,Er="readonly",Oi="readwrite";function vy(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function Dy(e){return new x(function(t){var n=e.transaction(Xs,Oi),r=Vo([""]);n.objectStore(Xs).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function Ey(e){return typeof Nr=="boolean"?x.resolve(Nr):Dy(e).then(function(t){return Nr=t,Nr})}function li(e){var t=Le[e.name],n={};n.promise=new x(function(r,i){n.resolve=r,n.reject=i}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function eo(e){var t=Le[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function to(e,t){var n=Le[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function hf(e,t){return new x(function(n,r){if(Le[e.name]=Le[e.name]||yf(),e.db)if(t)li(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var s=$n.open.apply($n,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(Xs)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),eo(e)}})}function Wo(e){return hf(e,!1)}function jo(e){return hf(e,!0)}function mf(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function Ay(e){return new x(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},r.readAsBinaryString(e)})}function pf(e){var t=vy(atob(e.data));return Vo([t],{type:e.type})}function wf(e){return e&&e.__local_forage_encoded_blob}function by(e){var t=this,n=t._initReady().then(function(){var r=Le[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return on(n,e,e),n}function Cy(e){li(e);for(var t=Le[e.name],n=t.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,Wo(e).then(i=>(e.db=i,mf(e)?jo(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw to(e,i),i})}function ft(e,t,n,r){r===void 0&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(s){if(r>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return x.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),jo(e)}).then(()=>Cy(e).then(function(){ft(e,t,n,r-1)})).catch(n);n(s)}}function yf(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function $y(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=Le[n.name];i||(i=yf(),Le[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=by);var s=[];function o(){return x.resolve()}for(var a=0;a<i.forages.length;a++){var u=i.forages[a];u!==t&&s.push(u._initReady().catch(o))}var l=i.forages.slice(0);return x.all(s).then(function(){return n.db=i.db,Wo(n)}).then(function(c){return n.db=c,mf(n,t._defaultConfig.version)?jo(n):c}).then(function(c){n.db=i.db=c,t._dbInfo=n;for(var h=0;h<l.length;h++){var m=l[h];m!==t&&(m._dbInfo.db=n.db,m._dbInfo.version=n.version)}})}function Sy(e,t){var n=this;e=ct(e);var r=new x(function(i,s){n.ready().then(function(){ft(n._dbInfo,Er,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=u.get(e);l.onsuccess=function(){var c=l.result;c===void 0&&(c=null),wf(c)&&(c=pf(c)),i(c)},l.onerror=function(){s(l.error)}}catch(c){s(c)}})}).catch(s)});return K(r,t),r}function Fy(e,t){var n=this,r=new x(function(i,s){n.ready().then(function(){ft(n._dbInfo,Er,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=u.openCursor(),c=1;l.onsuccess=function(){var h=l.result;if(h){var m=h.value;wf(m)&&(m=pf(m));var p=e(m,h.key,c++);p!==void 0?i(p):h.continue()}else i()},l.onerror=function(){s(l.error)}}catch(h){s(h)}})}).catch(s)});return K(r,t),r}function Ty(e,t,n){var r=this;e=ct(e);var i=new x(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,gy.call(t)==="[object Blob]"?Ey(a.db).then(function(u){return u?t:Ay(t)}):t}).then(function(u){ft(r._dbInfo,Oi,function(l,c){if(l)return o(l);try{var h=c.objectStore(r._dbInfo.storeName);u===null&&(u=void 0);var m=h.put(u,e);c.oncomplete=function(){u===void 0&&(u=null),s(u)},c.onabort=c.onerror=function(){var p=m.error?m.error:m.transaction.error;o(p)}}catch(p){o(p)}})}).catch(o)});return K(i,n),i}function ky(e,t){var n=this;e=ct(e);var r=new x(function(i,s){n.ready().then(function(){ft(n._dbInfo,Oi,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=u.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(l.error)},a.onabort=function(){var c=l.error?l.error:l.transaction.error;s(c)}}catch(c){s(c)}})}).catch(s)});return K(r,t),r}function xy(e){var t=this,n=new x(function(r,i){t.ready().then(function(){ft(t._dbInfo,Oi,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var l=u.error?u.error:u.transaction.error;i(l)}}catch(l){i(l)}})}).catch(i)});return K(n,e),n}function Ny(e){var t=this,n=new x(function(r,i){t.ready().then(function(){ft(t._dbInfo,Er,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.count();u.onsuccess=function(){r(u.result)},u.onerror=function(){i(u.error)}}catch(l){i(l)}})}).catch(i)});return K(n,e),n}function My(e,t){var n=this,r=new x(function(i,s){if(e<0){i(null);return}n.ready().then(function(){ft(n._dbInfo,Er,function(o,a){if(o)return s(o);try{var u=a.objectStore(n._dbInfo.storeName),l=!1,c=u.openKeyCursor();c.onsuccess=function(){var h=c.result;if(!h){i(null);return}e===0||l?i(h.key):(l=!0,h.advance(e))},c.onerror=function(){s(c.error)}}catch(h){s(h)}})}).catch(s)});return K(r,t),r}function Iy(e){var t=this,n=new x(function(r,i){t.ready().then(function(){ft(t._dbInfo,Er,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),u=a.openKeyCursor(),l=[];u.onsuccess=function(){var c=u.result;if(!c){r(l);return}l.push(c.key),c.continue()},u.onerror=function(){i(u.error)}}catch(c){i(c)}})}).catch(i)});return K(n,e),n}function Py(e,t){t=Uo.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=x.reject("Invalid arguments");else{const o=e.name===n.name&&r._dbInfo.db?x.resolve(r._dbInfo.db):Wo(e).then(a=>{const u=Le[e.name],l=u.forages;u.db=a;for(var c=0;c<l.length;c++)l[c]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const u=a.version+1;li(e);const l=Le[e.name],c=l.forages;a.close();for(let m=0;m<c.length;m++){const p=c[m];p._dbInfo.db=null,p._dbInfo.version=u}return new x((m,p)=>{const g=$n.open(e.name,u);g.onerror=v=>{g.result.close(),p(v)},g.onupgradeneeded=()=>{var v=g.result;v.deleteObjectStore(e.storeName)},g.onsuccess=()=>{const v=g.result;v.close(),m(v)}}).then(m=>{l.db=m;for(let p=0;p<c.length;p++){const g=c[p];g._dbInfo.db=m,eo(g._dbInfo)}}).catch(m=>{throw(to(e,m)||x.resolve()).catch(()=>{}),m})}):i=o.then(a=>{li(e);const u=Le[e.name],l=u.forages;a.close();for(var c=0;c<l.length;c++){const m=l[c];m._dbInfo.db=null}return new x((m,p)=>{var g=$n.deleteDatabase(e.name);g.onerror=()=>{const v=g.result;v&&v.close(),p(g.error)},g.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},g.onsuccess=()=>{const v=g.result;v&&v.close(),m(v)}}).then(m=>{u.db=m;for(var p=0;p<l.length;p++){const g=l[p];eo(g._dbInfo)}}).catch(m=>{throw(to(e,m)||x.resolve()).catch(()=>{}),m})})}return K(i,t),i}var By={_driver:"asyncStorage",_initStorage:$y,_support:yy(),iterate:Fy,getItem:Sy,setItem:Ty,removeItem:ky,clear:xy,length:Ny,key:My,keys:Iy,dropInstance:Py};function Ly(){return typeof openDatabase=="function"}var At="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_y="~~local_forage_type~",Au=/^~~local_forage_type~([^~]+)~/,ci="__lfsc__:",no=ci.length,qo="arbf",ro="blob",gf="si08",vf="ui08",Df="uic8",Ef="si16",Af="si32",bf="ur16",Cf="ui32",$f="fl32",Sf="fl64",bu=no+qo.length,Cu=Object.prototype.toString;function Ff(e){var t=e.length*.75,n=e.length,r,i=0,s,o,a,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=new ArrayBuffer(t),c=new Uint8Array(l);for(r=0;r<n;r+=4)s=At.indexOf(e[r]),o=At.indexOf(e[r+1]),a=At.indexOf(e[r+2]),u=At.indexOf(e[r+3]),c[i++]=s<<2|o>>4,c[i++]=(o&15)<<4|a>>2,c[i++]=(a&3)<<6|u&63;return l}function io(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=At[t[r]>>2],n+=At[(t[r]&3)<<4|t[r+1]>>4],n+=At[(t[r+1]&15)<<2|t[r+2]>>6],n+=At[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function Ry(e,t){var n="";if(e&&(n=Cu.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&Cu.call(e.buffer)==="[object ArrayBuffer]")){var r,i=ci;e instanceof ArrayBuffer?(r=e,i+=qo):(r=e.buffer,n==="[object Int8Array]"?i+=gf:n==="[object Uint8Array]"?i+=vf:n==="[object Uint8ClampedArray]"?i+=Df:n==="[object Int16Array]"?i+=Ef:n==="[object Uint16Array]"?i+=bf:n==="[object Int32Array]"?i+=Af:n==="[object Uint32Array]"?i+=Cf:n==="[object Float32Array]"?i+=$f:n==="[object Float64Array]"?i+=Sf:t(new Error("Failed to get type for BinaryArray"))),t(i+io(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=_y+e.type+"~"+io(this.result);t(ci+ro+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function Oy(e){if(e.substring(0,no)!==ci)return JSON.parse(e);var t=e.substring(bu),n=e.substring(no,bu),r;if(n===ro&&Au.test(t)){var i=t.match(Au);r=i[1],t=t.substring(i[0].length)}var s=Ff(t);switch(n){case qo:return s;case ro:return Vo([s],{type:r});case gf:return new Int8Array(s);case vf:return new Uint8Array(s);case Df:return new Uint8ClampedArray(s);case Ef:return new Int16Array(s);case bf:return new Uint16Array(s);case Af:return new Int32Array(s);case Cf:return new Uint32Array(s);case $f:return new Float32Array(s);case Sf:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var zo={serialize:Ry,deserialize:Oy,stringToBuffer:Ff,bufferToString:io};function Tf(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function Vy(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var i=new x(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){Tf(a,n,function(){t._dbInfo=n,s()},function(u,l){o(l)})},o)});return n.serializer=zo,i}function kt(e,t,n,r,i,s){e.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(u,l){l.rows.length?s(u,a):Tf(u,t,function(){u.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function Uy(e,t){var n=this;e=ct(e);var r=new x(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){kt(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(u,l){var c=l.rows.length?l.rows.item(0).value:null;c&&(c=o.serializer.deserialize(c)),i(c)},function(u,l){s(l)})})}).catch(s)});return K(r,t),r}function Wy(e,t){var n=this,r=new x(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){kt(a,o,`SELECT * FROM ${o.storeName}`,[],function(u,l){for(var c=l.rows,h=c.length,m=0;m<h;m++){var p=c.item(m),g=p.value;if(g&&(g=o.serializer.deserialize(g)),g=e(g,p.key,m+1),g!==void 0){i(g);return}}i()},function(u,l){s(l)})})}).catch(s)});return K(r,t),r}function kf(e,t,n,r){var i=this;e=ct(e);var s=new x(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var u=t,l=i._dbInfo;l.serializer.serialize(t,function(c,h){h?a(h):l.db.transaction(function(m){kt(m,l,`INSERT OR REPLACE INTO ${l.storeName} (key, value) VALUES (?, ?)`,[e,c],function(){o(u)},function(p,g){a(g)})},function(m){if(m.code===m.QUOTA_ERR){if(r>0){o(kf.apply(i,[e,u,n,r-1]));return}a(m)}})})}).catch(a)});return K(s,n),s}function jy(e,t,n){return kf.apply(this,[e,t,n,1])}function qy(e,t){var n=this;e=ct(e);var r=new x(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){kt(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(u,l){s(l)})})}).catch(s)});return K(r,t),r}function zy(e){var t=this,n=new x(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){kt(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,u){i(u)})})}).catch(i)});return K(n,e),n}function Gy(e){var t=this,n=new x(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){kt(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,u){var l=u.rows.item(0).c;r(l)},function(a,u){i(u)})})}).catch(i)});return K(n,e),n}function Ky(e,t){var n=this,r=new x(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){kt(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(u,l){var c=l.rows.length?l.rows.item(0).key:null;i(c)},function(u,l){s(l)})})}).catch(s)});return K(r,t),r}function Hy(e){var t=this,n=new x(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){kt(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,u){for(var l=[],c=0;c<u.rows.length;c++)l.push(u.rows.item(c).key);r(l)},function(a,u){i(u)})})}).catch(i)});return K(n,e),n}function Zy(e){return new x(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function Yy(e,t){t=Uo.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;return e.name?i=new x(function(s){var o;e.name===n.name?o=r._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s(Zy(o))}).then(function(s){return new x(function(o,a){s.db.transaction(function(u){function l(p){return new x(function(g,v){u.executeSql(`DROP TABLE IF EXISTS ${p}`,[],function(){g()},function(T,$){v($)})})}for(var c=[],h=0,m=s.storeNames.length;h<m;h++)c.push(l(s.storeNames[h]));x.all(c).then(function(){o()}).catch(function(p){a(p)})},function(u){a(u)})})}):i=x.reject("Invalid arguments"),K(i,t),i}var Jy={_driver:"webSQLStorage",_initStorage:Vy,_support:Ly(),iterate:Wy,getItem:Uy,setItem:jy,removeItem:qy,clear:zy,length:Gy,key:Ky,keys:Hy,dropInstance:Yy};function Qy(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function xf(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Xy(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function eg(){return!Xy()||localStorage.length>0}function tg(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=xf(e,t._defaultConfig),eg()?(t._dbInfo=n,n.serializer=zo,x.resolve()):x.reject()}function ng(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return K(n,e),n}function rg(e,t){var n=this;e=ct(e);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return K(r,t),r}function ig(e,t){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,u=1,l=0;l<a;l++){var c=localStorage.key(l);if(c.indexOf(s)===0){var h=localStorage.getItem(c);if(h&&(h=i.serializer.deserialize(h)),h=e(h,c.substring(o),u++),h!==void 0)return h}}});return K(r,t),r}function sg(e,t){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return K(r,t),r}function og(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return K(n,e),n}function ag(e){var t=this,n=t.keys().then(function(r){return r.length});return K(n,e),n}function ug(e,t){var n=this;e=ct(e);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return K(r,t),r}function lg(e,t,n){var r=this;e=ct(e);var i=r.ready().then(function(){t===void 0&&(t=null);var s=t;return new x(function(o,a){var u=r._dbInfo;u.serializer.serialize(t,function(l,c){if(c)a(c);else try{localStorage.setItem(u.keyPrefix+e,l),o(s)}catch(h){(h.name==="QuotaExceededError"||h.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(h),a(h)}})})});return K(i,n),i}function cg(e,t){if(t=Uo.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i;return e.name?i=new x(function(s){e.storeName?s(xf(e,r._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=x.reject("Invalid arguments"),K(i,t),i}var fg={_driver:"localStorageWrapper",_initStorage:tg,_support:Qy(),iterate:ig,getItem:rg,setItem:lg,removeItem:ug,clear:ng,length:ag,key:sg,keys:og,dropInstance:cg};const dg=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),hg=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(dg(e[r],t))return!0;r++}return!1},Nf=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Un={},$u={},wn={INDEXEDDB:By,WEBSQL:Jy,LOCALSTORAGE:fg},mg=[wn.INDEXEDDB._driver,wn.WEBSQL._driver,wn.LOCALSTORAGE._driver],qr=["dropInstance"],Ds=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(qr),pg={description:"",driver:mg.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function wg(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function Es(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(Nf(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class Go{constructor(t){for(let n in wn)if(wn.hasOwnProperty(n)){const r=wn[n],i=r._driver;this[n]=i,Un[i]||this.defineDriver(r)}this._defaultConfig=Es({},pg),this._config=Es({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const i=new x(function(s,o){try{const a=t._driver,u=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(u);return}const l=Ds.concat("_initStorage");for(let m=0,p=l.length;m<p;m++){const g=l[m];if((!hg(qr,g)||t[g])&&typeof t[g]!="function"){o(u);return}}(function(){const m=function(p){return function(){const g=new Error(`Method ${p} is not implemented by the current driver`),v=x.reject(g);return K(v,arguments[arguments.length-1]),v}};for(let p=0,g=qr.length;p<g;p++){const v=qr[p];t[v]||(t[v]=m(v))}})();const h=function(m){Un[a]&&console.info(`Redefining LocalForage driver: ${a}`),Un[a]=t,$u[a]=m,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(h,o):h(!!t._support):h(!0)}catch(a){o(a)}});return on(i,n,r),i}driver(){return this._driver||null}getDriver(t,n,r){const i=Un[t]?x.resolve(Un[t]):x.reject(new Error("Driver not found."));return on(i,n,r),i}getSerializer(t){const n=x.resolve(zo);return on(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return on(r,t,t),r}setDriver(t,n,r){const i=this;Nf(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(c){return i._extend(c),o(),i._ready=i._initStorage(i._config),i._ready}function u(c){return function(){let h=0;function m(){for(;h<c.length;){let g=c[h];return h++,i._dbInfo=null,i._ready=null,i.getDriver(g).then(a).catch(m)}o();const p=new Error("No available storage method found.");return i._driverSet=x.reject(p),i._driverSet}return m()}}const l=this._driverSet!==null?this._driverSet.catch(()=>x.resolve()):x.resolve();return this._driverSet=l.then(()=>{const c=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(c).then(h=>{i._driver=h._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=u(s)})}).catch(()=>{o();const c=new Error("No available storage method found.");return i._driverSet=x.reject(c),i._driverSet}),on(this._driverSet,n,r),this._driverSet}supports(t){return!!$u[t]}_extend(t){Es(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,i=t.length;r<i;r++){const s=t[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=Ds.length;t<n;t++)wg(this,Ds[t])}createInstance(t){return new Go(t)}}const yg=new Go,gg=yg,vg={""(e){return{fixedRecords:e.map(n=>"id"in n?n:{...n,id:wo()}),nextVersion:"add-id-field"}}},Vi=Ae({id:"",contactDate:Lc,companyName:"",companyAddress:"",url:"",contactName:"",contactEmail:"",contactPhoneNumber:"",positionTitle:"",posting:"",contactMethod:"",results:"",notes:""}),fr=Ae([Vi]),Xn={companyAddress:"Company Address",companyName:"Company Name",contactDate:"Date Made Contact",contactEmail:"Contact Email",contactMethod:"Contact Method",contactName:"Contact Name",contactPhoneNumber:"Contact Phone Number",notes:"Notes",positionTitle:"Position Title",posting:"Posting number or URL",results:"Results",url:"Company URL"},rt=gg.createInstance({description:"Records for job search.",name:"job-search",storeName:"job-search"});let Su=!0;const Sn="job-search-data",Fu="job-search-data-version";async function Tu(){return Su&&(Su=!1,await Mf(),await Eg()),await rt.getItem(Sn)||[]}async function Dg(e){Gt(e,fr),await rt.setItem(Sn,e)}async function Mf(){const e=await rt.getItem(Fu)||"",t=vg[e];if(!t){ds.info(`Current data version: '${e}'`);return}ds.info(`Migration found for data version '${e}'. Executing migration...`);const n=await rt.getItem(Sn)||[],r=["backup-from",e,To(Fo()),Vr(4)].join("-");await rt.setItem(r,n);const{fixedRecords:i,nextVersion:s}=await t(n);return await rt.setItem(Sn,i),await rt.setItem(Fu,s),ds.info(`Migration completed. New data version: '${s}'`),Mf()}async function Eg(){const e=await rt.getItem(Sn)||[];let t=!1;e.forEach(n=>{n.id||(t=!0,n.id=wo())}),t&&await rt.setItem(Sn,e)}class Ko extends Error{name="SpaRouterError"}class ku extends Ko{name="GlobalUrlEventsConsolidationError"}class Ag extends Ko{name="SanitizationDepthMaxed"}Ae({paths:[""],search:$e(Y(void 0,Fi({keys:"",values:[""],required:!1}))),hash:$e(Y(void 0,""))});const bg=Ae({basePath:Y("",void 0),sanitizeRoute:e=>e,maxListenerCount:Y(1,void 0),disableWarnings:Y(void 0,!1),isPaused:Y(!1,void 0)}),As="://";function If(...e){const t=e.join("/"),[n,r=""]=t.includes(As)?t.split(As):["",t];let i=!1;const s=r.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const c=l[u+1];let h=a;const m=c?.startsWith("?"),p=!a.includes("?")&&m,g=c==="?";if(m||p){i=!0;let v=!1;const T=l.slice(u+2).reduce(($,I)=>(I.includes("#")&&(v=!0),v?$.concat(I):[$,I].join("&")),"");h=[a,c,g?mn({value:T,prefix:"&"}):T].join("")}return o.concat(h)},[]);return[n,n?As:"",s.join("/")].join("")}var Fn;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Fn||(Fn={}));var Tn;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Tn||(Tn={}));const Cg=Ae({encoding:$e(Y(void 0,Vs(Fn))),searchParamStrategy:$e(Y(void 0,Vs(Tn)))});function Mr(e,t){return e.map(n=>{if(n!=null)return yn(String(n),t)}).filter(n=>n!=null)}function yn(e,t){return t?.encoding===Fn.Decode?decodeURIComponent(e):t?.encoding===Fn.Encode?encodeURIComponent(e):e}const $g=Ae(Fi({keys:"",values:[""],required:!0}));function Sg(e,t,n){const r=n?.searchParamStrategy===Tn.Clear?{}:Ye(e,(o,a)=>D.isString(a)?[a]:a),i=Ye(t,(o,a)=>{if(n?.searchParamStrategy===Tn.Append){const u=r[o],l=D.isArray(u)?u:[u];if(a){const c=D.isArray(a)?a:[a];return Mr([...l,...c],n)}else return Mr(l,n)}else return D.isArray(a)?Mr(a,n):a?Mr([a],n):void 0});return $i({...r,...i},(o,a)=>!!a)}function Pf(e,t){return D.isString(e)&&!e.includes("?")?{}:(D.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[o,...a]=P0(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=Bf({options:t,key:o,value:a}),l=nr(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function Fg(e){if(e!=null)return D.isArray(e)?[...e]:e===""?[]:[e]}function Tg(e,t){const n=Ci(Object.entries(e),([r,i])=>{const s=Fg(i);return s?.length?s.map(o=>{const a=Bf({options:t,key:r,value:o});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?Fe({value:n.join("&"),prefix:"?"}):""}function Bf({options:e,key:t,value:n}){return{key:yn(t,e),value:yn(String(n),e)}}function Lf({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",n?n+"@":"",Ui({hostname:t,port:i}),Ho({hash:e,pathname:r,search:o})].join("")}function _f({pathname:e}){const t=mn({value:e,prefix:"/"});return t?t.split("/"):[]}function Ho({hash:e,pathname:t,search:n}){return[Fe({value:t,prefix:"/"}),n?Fe({value:n,prefix:"?"}):"",e?Fe({value:e,prefix:"#"}):""].join("")}function Ui({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Rf({hostname:e,port:t,protocol:n}){return[n,Ui({hostname:e,port:t})].filter(D.isTruthy).join("://")}function gn(e,t){const n=D.isString(e)?mn({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?Fe({value:yn(r,t),prefix:"#"}):"",s=n.replace(/#[^#]*$/,""),o=s.replace(/^[^?]*(?:\?|$)/,""),a=o?Fe({value:yn(o,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),h=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),p=h!==m,[g,...v]=p?h.split(":").reverse():[],T=v.toReversed().join("").replace(/[/:]/g,"")||"",$=g?.replace(/[/:]/g,"")||"",I=I0(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),U=I[0]?.endsWith("]")?"":I[1]===":"&&I[0]||"",Z=m.replace(new RegExp(`:${U}($|/)`),"$1").replace(/\/.*/,""),Ke=m.replace(/^[^/]*(\/|$)/,"$1"),Qt=yn(Ke.replace(/^[^/]*(?:\/|$)/,"/"),t),ji=Ui({hostname:Z,port:U}),xt=Rf({hostname:Z,port:U,protocol:l}),Nt=Lf({hash:i,hostname:Z,password:$,pathname:Qt,port:U,protocol:l,search:a,username:T}),qi=Pf(a),zf=_f({pathname:Qt});return{fullPath:Ho({hash:i,pathname:Qt,search:a}),hash:i,host:ji,hostname:Z,href:Nt,origin:xt,password:$,pathname:Qt,paths:zf,port:U,protocol:l,search:a,searchParams:qi,username:T}}Ae({hash:$e(Y(void 0,"")),search:$e(Y(void 0,"",Fi({keys:"",required:!1,values:Y(null,void 0,"",-1,!1,0n)}))),hostname:$e(Y(void 0,"")),pathname:$e(Y(void 0,"")),paths:$e(Y(void 0,[""])),protocol:$e(Y(void 0,"")),username:$e(Y(void 0,"")),password:$e(Y(void 0,"")),port:$e(Y(void 0,"",-1))});function kg(e,t,n){const r=!!n,i=t==null||Pi(t,Cg),s=i?gn(""):D.instanceOf(e,URL)||D.isString(e)?gn(e):e,o=i?e:t,a=D.isString(o)&&o.startsWith("."),u=D.isString(o)||D.instanceOf(o,URL)?$i(gn(o),(v,T)=>D.isTruthy(T)):o,l=r?n:i?t:void 0,c=Ye(s,(v,T)=>{if(!D.hasKey(u,v))return T;const $=u[v];return D.isNumber($)?String($):D.isString($)?v==="hash"&&$?Fe({value:$,prefix:"#"}):v==="pathname"?Fe({value:$,prefix:"/"}):$:T});D.hasKey(u,"paths")&&u.paths&&(c.pathname=If(a?s.pathname:"",...u.paths));const h=D.isString(u.search)?Pf(Fe({value:u.search,prefix:"?"})):yc(u.search||{}),m=Sg(c.searchParams,h,{...l,encoding:Fn.None}),p=Tg(m,l);return{...c,searchParams:m,search:p,paths:_f(c),fullPath:Ho(c),host:Ui(c),origin:Rf(c),href:Lf({...c,search:p})}}const xg=Ae({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:$g,hash:"",fullPath:"/",href:"/"},!0);({...xg.defaultValue});const Ng=0;function Mg(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Ng)}const Wi="locationchange",it=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const xu=it?.pushState;function Nu(...e){if(!xu)return;const t=xu.apply(it,e);return globalThis.dispatchEvent(new Event(Wi)),t}const Mu=it?.replaceState;function Iu(...e){if(!Mu)return;const t=Mu.apply(it,e);return globalThis.dispatchEvent(new Event(Wi)),t}function Ig(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!it)){{if(it.pushState===Nu)throw new ku("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(it.replaceState===Iu)throw new ku("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,it.pushState=Nu,it.replaceState=Iu,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Wi))})}}function Ir(e,t){const n=gn(e),r=mn({value:mn({value:n.pathname,prefix:Fe({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],s=Object.keys(n.searchParams).length?n.searchParams:void 0,o=n.hash?mn({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class Pg{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Gt(t,bg),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new Rc({defaultValue:n,equalityCheck:()=>!1}),Ig(),this.removeGlobalListener=Cc(globalThis,Wi,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Ag("Looping route sanitization detected; aborting window URL change listener.");const r=Ir(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);D.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:If(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Ir(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Ir(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),s=this.routeIncludesBasePath(Ir(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return kg(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?Fe({value:s.hash,prefix:"#"}):""},{searchParamStrategy:Tn.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=gn(r);return this.params.isPaused||!n.force&&D.jsonEquals(gn(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return Mg(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new Ko(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}const so={paths:[Me.Entry],hash:void 0,search:void 0},Bg=new Pg({basePath:"job-search",sanitizeRoute(e){const t=Dt.isEnumValue(e.paths[0],Me)||so.paths[0],n=e.search?.search?.[0],r=t===Me.View&&n?{search:[n]}:void 0,i=t===Me.View?[t,e.paths[1]].filter(D.isTruthy):[t];return{...so,search:r,paths:i}}}),fi=Dr()("change-route"),Of=Dr()("update-all-records"),Vf=Dr()("update-individual-record"),Lg=ne({name:"GithubIcon",svgTemplate:C`
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f"
            />
        </svg>
    `}),di=new Set;function _g(...e){return(e.length?e:[""]).forEach(n=>{di.add(n),Uf()}),di.size}function Pu(...e){return(e.length?e:[""]).forEach(n=>{di.delete(n)}),!Og()}function Uf(){window.onbeforeunload||(window.onbeforeunload=()=>"")}function Rg(){window.onbeforeunload&&(window.onbeforeunload=null)}function Og(){return di.size?Uf():Rg(),!!window.onbeforeunload}function Bu(){return{...Vi.defaultValue,contactDate:Fo(),id:wo(),contactMethod:"applied online"}}const Rt="record edits",Wt=Tt()({tagName:"job-search-record-edit",styles:V`
        th {
            text-align: right;
        }

        td {
            padding-left: 8px;
        }

        .buttons {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .saved-subtitle {
            opacity: 0.5;
        }
    `,events:{searchRecordSave:Re(),searchRecordEdit:Re()},state(){return{isSaving:!1,savedSubtitle:"",currentSearchRecord:void 0}},render({state:e,updateState:t,dispatch:n,events:r,inputs:i}){if(!e.currentSearchRecord){const u=Rs(()=>JSON.parse(localStorage.getItem(Rt)||""),{fallbackValue:void 0}),l=i.existingRecord||(Pi(u,Vi)?u:Bu());t({currentSearchRecord:l}),i.existingRecord||n(new r.searchRecordEdit(l))}const s=e.currentSearchRecord;$t.isDefined(s);function o(u,l){$t.isDefined(s),_g(Rt);const c={...s,[u]:l};localStorage.setItem(Rt,JSON.stringify(c)),t({currentSearchRecord:c}),n(new r.searchRecordEdit(c))}const a=In(s).map(([u,l])=>!D.isString(l)||!Xn[u]?H:C`
                    <tr>
                        <th>${Xn[u]}:</th>
                        <td>
                            <${pn.assign({value:l})}
                                ${W(pn.events.valueChange,c=>{o(u,c.detail)})}
                            ></${pn}>
                        </td>
                    </tr>
                `);return C`
            <table>
                <tbody>
                    <tr>
                        <th>date</th>
                        <td>
                            <input
                                value=${qs(s.contactDate,tt.Date)}
                                type="date"
                                ${W("change",u=>{const l=Dp(Si(u,HTMLInputElement),Bc);l&&o("contactDate",l)})}
                            />
                        </td>
                    </tr>
                    ${a}
                </tbody>
            </table>
            <div class="buttons">
                <${Be.assign({text:i.existingRecord?"Revert":"Clear",disabled:e.isSaving,buttonStyle:cr.Outline})}
                    ${W("click",()=>{Pu(Rt),localStorage.removeItem(Rt),t({currentSearchRecord:void 0})})}
                ></${Be}>
                <${Be.assign({text:e.isSaving?"":"Save",icon:e.isSaving?Oo:void 0,disabled:e.isSaving})}
                    ${W("click",async()=>{t({isSaving:!0}),n(new r.searchRecordSave(s)),await zt({seconds:.5}),t({currentSearchRecord:Bu(),savedSubtitle:"Saved",isSaving:!1}),localStorage.removeItem(Rt),Pu(Rt),await zt({seconds:5}),t({savedSubtitle:""})})}
                ></${Be}>
                <span class="saved-subtitle">${e.savedSubtitle}</span>
            </div>
        `}});function Wf(e){const t=pp(e,F.Week),n=_c(e,F.Week),r=Ta[t.month-1]?.slice(0,3),i=Ta[n.month-1]?.slice(0,3);return`${r}${t.day}-${i}${n.day}`}function jf(e){const t={};return e.toSorted((r,i)=>Ja(i.contactDate)-Ja(r.contactDate)).forEach(r=>{const i=_c(r.contactDate,F.Week),s=nr(t,i.year,()=>({})),o=Wf(r.contactDate);nr(s,o,()=>[]).push(r)}),t}function qf(e,t){return[e.replace("-"," - ").replaceAll(/(\D)(\d)/g,"$1 $2"),`(${t||0})`].join(" ")}const hi=Tt()({tagName:"job-view-record",styles:V`
        th {
            text-align: right;
            white-space: nowrap;
        }

        td {
            word-break: break-all;
            padding-left: 8px;
        }

        ${J} {
            height: 16px;
            width: 16px;
            cursor: pointer;
        }
    `,state(){return{editing:!1}},render({inputs:e,state:t,updateState:n,dispatch:r}){const i=To(e.record.contactDate),s=e.record.contactName||e.record.companyName||i,a=G(Vi.shape).map(l=>l==="contactDate"||!e.record[l]||!Xn[l]?H:C`
                <tr>
                    <th>${Xn[l]}:</th>
                    <td>${e.record[l]}</td>
                </tr>
            `),u=t.editing?C`
                  <${Wt.assign({existingRecord:e.record})}
                      ${W(Wt.events.searchRecordSave,l=>{n({editing:!1}),r(new Vf(l.detail))})}
                  ></${Wt}>
              `:C`
                  <table>
                      <tbody>
                          <tr>
                              <th>${Xn.contactDate}:</th>
                              <td>${i}</td>
                          </tr>
                          ${a}
                      </tbody>
                  </table>
              `;return C`
            <h2>
                ${s}
                <${J.assign({icon:ny,fitContainer:!0})}
                    ${W("click",()=>{n({editing:!t.editing})})}
                ></${J}>
            </h2>
            ${u}
        `}}),fn=Tt()({tagName:"job-record-search",events:{searchResultCount:Re()},styles:V`
        :host {
            display: block;
        }

        h3 {
            border-bottom: 1px solid #aaa;
            padding-bottom: 4px;
            font-weight: normal;
        }
    `,render({inputs:e,dispatch:t,events:n}){if(!e.searchQuery.length)return H;const r=e.allRecords.filter(s=>In(s).some(([o,a])=>o==="id"||typeof a!="string"||e.searchKeys&&e.searchKeys.length&&!e.searchKeys.includes(o)?!1:e.searchQuery.some(u=>String(a).toLowerCase().includes(u.toLowerCase())))),i=jf(r);return t(new n.searchResultCount(r.length)),r.length?Object.entries(i).map(([s,o])=>C`
                ${s}
                ${Object.entries(o).map(([a,u])=>C`
                        <h3>${qf(a,u.length)}</h3>
                        ${u.map(l=>C`
                                <${hi.assign({record:l})}></${hi}>
                            `)}
                    `)}
            `):"No records match this search."}}),bs=Tt()({tagName:"job-create-search-record",state(){return{searchResultCount:0,currentEdits:void 0}},hostClasses:{"job-create-search-record-no-past-entries":({state:e})=>!e.searchResultCount},styles:({hostClasses:e})=>V`
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 64px;
        }

        th {
            text-align: right;
        }

        td {
            padding-left: 8px;
        }

        .buttons {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .saved-subtitle {
            opacity: 0.5;
        }

        .entry {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        p,
        h2 {
            ${nf};
        }

        .warning {
            font-weight: bold;
            color: darkorange;
        }

        .search-results {
            flex-basis: 500px;
            max-width: 500px;
            flex-grow: 1;
        }

        ${fn} {
            margin-left: 16px;
            opacity: 0.5;
        }

        ${e["job-create-search-record-no-past-entries"].selector} .search-results {
            display: none;
        }
    `,events:{searchRecordCreate:Re()},render({dispatch:e,events:t,inputs:n,state:r,updateState:i}){const s=r.currentEdits?[Dt.isLengthAtLeast(r.currentEdits.companyName,3),Dt.isLengthAtLeast(r.currentEdits.contactName,3),Dt.isLengthAtLeast(r.currentEdits.contactEmail,3),Dt.isLengthAtLeast(r.currentEdits.posting,3)].filter(D.isTruthy):[];s.length||i({searchResultCount:0});const o=r.searchResultCount?"Warning: you may have already entered this job.":"";return C`
            <div class="entry">
                <h2>Enter Job Application</h2>
                <${Wt.assign({existingRecord:void 0})}
                    ${W(Wt.events.searchRecordSave,a=>{i({searchResultCount:0,currentEdits:void 0}),e(new t.searchRecordCreate(a.detail))})}
                    ${W(Wt.events.searchRecordEdit,a=>{i({currentEdits:a.detail})})}
                ></${Wt}>
                <p class="warning">${o}</p>
            </div>
            <div class="search-results">
                <h3>Past entries:</h3>
                <${fn.assign({allRecords:n.allRecords,searchQuery:s,searchKeys:["companyName","contactName","contactEmail","posting"]})}
                    ${W(fn.events.searchResultCount,a=>{i({searchResultCount:a.detail})})}
                ></${fn}>
            </div>
        `}});function Vg(e){const t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download="job-search.json",r.style.visibility="hidden",r.style.position="absolute",document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(n)}const Cs=Tt()({tagName:"job-raw-data",styles:V`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        textarea {
            flex-grow: 1;
            font-size: 1.2em;
            font-family: monospace;
            resize: none;
        }

        .bottom-buttons {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,state(){return{inputJson:"",isSaving:!1}},render({inputs:e,state:t,updateState:n,dispatch:r}){const i=t.inputJson||JSON.stringify(e.data,null,4),s=Rs(()=>Ou.parse(i),{fallbackValue:{}}),o=Rs(()=>Gt(s,fr));return C`
            <textarea
                .value=${i}
                ${W("input",a=>{const u=Si(a,HTMLTextAreaElement);n({inputJson:u.value})})}
            ></textarea>

            <div class="bottom-buttons">
                <${Be.assign({text:"Download",buttonStyle:cr.Outline})}
                    ${W("click",()=>{Vg(i)})}
                ></${Be}>
                <${Be.assign({text:t.isSaving?"":"Save",icon:t.isSaving?Oo:void 0,disabled:!!o||t.isSaving})}
                    ${W("click",async()=>{n({isSaving:!0}),Gt(s,fr),await zt({seconds:.5}),r(new Of(s)),r(new fi({paths:[Me.View]})),n({isSaving:!1})})}
                ></${Be}>
                <p class="error">
                    ${o?Te(o):C`
                              &nbsp;
                          `}
                </p>
            </div>
        `}}),Lu=Tt()({tagName:"job-view-all-records",styles:V`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .contact-container {
            display: flex;
            gap: 32px;
        }

        .week-buttons {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: flex-start;
        }

        .all-weeks {
            flex-shrink: 0;
        }
    `,render({inputs:e,dispatch:t}){const n=jf(e.allRecords),r=Fo(),i=Wf(rr(r,{weeks:-1})),[s,o]=e.currentRoute.paths[1]?e.currentRoute.paths[1].replace(/(\d)(\D)/,"$1 $2").split(" "):[r.year,i],a=In(n).map(([c,h])=>{const m=Object.keys(h).map(p=>{const g=qf(p,h[p]?.length||0),v=`${c}${p}`;return C`
                        <${Be.assign({text:g,disabled:!!c&&!!p&&v===`${s}${o}`})}
                            ${W("click",()=>{t(new fi({paths:[Me.View,v]}))})}
                        ></${Be}>
                    `});return C`
                    <section>
                        <span>${c}</span>
                        <div class="week-buttons">${m}</div>
                    </section>
                `}),u=s&&o&&n[Number(s)]?.[o]||[],l=e.currentRoute.search?.search[0]||"";return C`
            ${l?C`
                      <${fn.assign({allRecords:e.allRecords,searchQuery:[l]})}></${fn}>
                  `:C`
                      <div class="contact-container">
                          <div class="all-weeks">
                              ${a.length?a:"No records yet."}
                          </div>

                          <div class="week-data">
                              ${u.length?u.map(c=>C`
                                            <${hi.assign({record:c})}></${hi}>
                                        `):e.currentRoute.paths[1]?"No records for this week":H}
                          </div>
                      </div>
                  `}
        `}});Lo({tagName:"job-app",styles:V`
        :host {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
            padding: 16px;
            font-family: sans-serif;
        }

        .app-wrapper {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 16px;
        }

        ${vs} {
            display: flex;
        }

        nav {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: space-between;
        }

        .nav-icon {
            height: 24px;
            width: 24px;
        }

        .tab-buttons,
        .external-links {
            flex-shrink: 0;
            display: flex;
            gap: 8px;
            align-items: flex-start;
        }

        .external-links {
            align-items: center;
        }

        main {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        ${Cs} {
            flex-grow: 1;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,state(){return{records:cw({defaultValue:Tu()}),router:Bg,currentRoute:so,cleanup:void 0}},init({state:e,updateState:t}){if(e.router.listen(!0,n=>{t({currentRoute:n})}),!e.cleanup){const n=window.setInterval(async()=>{e.records.setValue(await Tu())},1e4);t({cleanup:()=>{window.clearInterval(n)}})}},cleanup({state:e,updateState:t}){e.cleanup&&(e.cleanup(),t({cleanup:void 0}))},render({state:e}){async function t(a){await Dg(a),e.records.setValue(a)}const n=e.records.settledValue;if(n instanceof Error)return C`
                <p class="error">${Te(n)}</p>
            `;const r=String(e.currentRoute.paths[0]),i=n?r===Me.Raw||!Pi(n,fr)?C`
                      <${Cs.assign({data:n})}></${Cs}>
                  `:r===Me.Entry?C`
                        <${bs.assign({allRecords:Dt.isArray(n)||[]})}
                            ${W(bs.events.searchRecordCreate,async a=>{if(D.isArray(n)){const u=[...n,a.detail];await t(u)}})}
                        ></${bs}>
                    `:r===Me.View?C`
                          <${Lu.assign({currentRoute:e.currentRoute,allRecords:Dt.isArray(n)||[]})}></${Lu}>
                      `:"UNKNOWN TAB":"Loading...",s=We(Me).map(a=>C`
                <${Be.assign({disabled:r===a,text:py[a]})}
                    ${W("click",u=>{Si(u,HTMLElement).dispatchEvent(new fi({paths:[a]}))})}
                ></${Be}>
            `),o=r===Me.View?C`
                      Search
                      <${pn.assign({value:e.currentRoute.search?.search[0]||"",showClearButton:!0})}
                          ${W(pn.events.valueChange,a=>{e.router.setRoute({search:{search:[a.detail]}})})}
                      ></${pn}>
                  `:H;return C`
            <div
                class="app-wrapper"
                ${W(fi,a=>{e.router.setRoute(a.detail)})}
                ${W(Of,async a=>{await t(a.detail)})}
                ${W(Vf,async a=>{Gt(n,fr);let u=0;const l=n.map(c=>c.id===a.detail.id?(u++,a.detail):c);if(u>1)throw new Error(`Tried to update multiple records: ${d(a.detail)}`);if(!u)throw new Error(`Found no records to update: ${d(a.detail)}`);await t(l)})}
            >
                <nav>
                    <div class="tab-buttons">${s}</div>
                    <div class="external-links">
                        ${o}
                        <${vs.assign({link:{newTab:!0,url:"https://github.com/electrovir/job-search"}})}>
                            <${J.assign({icon:Lg})} class="nav-icon"></${J}>
                        </${vs}>
                    </div>
                </nav>
                <main>${i}</main>
            </div>
        `}});
