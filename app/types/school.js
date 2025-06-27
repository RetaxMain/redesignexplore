"use strict";
// Description: WordPress API functions
// Used to fetch data from a WordPress site using the WordPress REST API
// Types are imported from `wp.d.ts`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolAPIError = void 0;
exports.getAllSchools = getAllSchools;
var query_string_1 = require("query-string");
var baseUrl = process.env.SCHOOL_URL || "http://65.1.65.205/api/student/approved";
if (!baseUrl) {
    throw new Error("SCHOOL_URL environment variable is not defined");
}
function getUrl(query) {
    var params = query ? query_string_1.default.stringify(query) : "";
    return "".concat(baseUrl).concat(params ? "?".concat(params) : "");
}
var SchoolAPIError = /** @class */ (function (_super) {
    __extends(SchoolAPIError, _super);
    function SchoolAPIError(message, status, endpoint) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.endpoint = endpoint;
        _this.name = "SchoolAPIError";
        return _this;
    }
    return SchoolAPIError;
}(Error));
exports.SchoolAPIError = SchoolAPIError;
// async function wordpressFetch<T>(url: string): Promise<T> {
//   const userAgent = "Next.js WordPress Client";
//   const response = await fetch(url, {
//     headers: {
//       "User-Agent": userAgent,
//     },
//   });
//   if (!response.ok) {
//     throw new SchoolAPIError(
//       `WordPress API request failed: ${response.statusText}`,
//       response.status,
//       url
//     );
//   }
//   return response.json();
// }
// export async function getAllSchools(filterParams?: {
//   author?: string;
//   tag?: string;
//   category?: string;
//   search?: string;
// }): Promise<School[]> {
//   const query: Record<string, any> = {
//     _embed: true,
//     per_page: 100,
//   };
//   if (filterParams?.search) {
//     query.search = filterParams.search;
//     if (filterParams?.author) {
//       query.author = filterParams.author;
//     }
//     if (filterParams?.tag) {
//       query.tags = filterParams.tag;
//     }
//     if (filterParams?.category) {
//       query.categories = filterParams.category;
//     }
//   } else {
//     if (filterParams?.author) {
//       query.author = filterParams.author;
//     }
//     if (filterParams?.tag) {
//       query.tags = filterParams.tag;
//     }
//     if (filterParams?.category) {
//       query.categories = filterParams.category;
//     }
//   }
//   const url = getUrl("/schools", query);
//   return wordpressFetch<Post[]>(url);
// }
function FetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res, school;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    console.log(res);
                    if (!res.ok)
                        throw new Error("API error: ".concat(res.statusText));
                    return [4 /*yield*/, res.json()];
                case 2:
                    school = _a.sent();
                    console.log("Response Data:", school);
                    return [2 /*return*/, school.data.schools];
            }
        });
    });
}
function getAllSchools(filterParams) {
    return __awaiter(this, void 0, void 0, function () {
        var query, url, data;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    query = {};
                    if (filterParams === null || filterParams === void 0 ? void 0 : filterParams.searchTerm) {
                        query.search = filterParams.searchTerm;
                    }
                    if ((_a = filterParams === null || filterParams === void 0 ? void 0 : filterParams.schoolType) === null || _a === void 0 ? void 0 : _a.length) {
                        query.type = filterParams.schoolType.join(",");
                    }
                    if (filterParams === null || filterParams === void 0 ? void 0 : filterParams.minRating) {
                        query.minRating = filterParams.minRating;
                    }
                    if (filterParams === null || filterParams === void 0 ? void 0 : filterParams.state) {
                        query.state = filterParams.state;
                    }
                    if (filterParams === null || filterParams === void 0 ? void 0 : filterParams.city) {
                        query.city = filterParams.city;
                    }
                    if (filterParams === null || filterParams === void 0 ? void 0 : filterParams.area) {
                        query.area = filterParams.area;
                    }
                    if (filterParams === null || filterParams === void 0 ? void 0 : filterParams.maxTuition) {
                        query.maxTuition = filterParams.maxTuition;
                    }
                    if ((_b = filterParams === null || filterParams === void 0 ? void 0 : filterParams.amenities) === null || _b === void 0 ? void 0 : _b.length) {
                        query.amenities = filterParams.amenities.join(",");
                    }
                    if ((_c = filterParams === null || filterParams === void 0 ? void 0 : filterParams.schoolBoard) === null || _c === void 0 ? void 0 : _c.length) {
                        query.schoolBoard = filterParams.schoolBoard.join(",");
                    }
                    if ((_d = filterParams === null || filterParams === void 0 ? void 0 : filterParams.medium) === null || _d === void 0 ? void 0 : _d.length) {
                        query.medium = filterParams.medium.join(",");
                    }
                    url = getUrl(query);
                    console.log("Generated URL:", url);
                    return [4 /*yield*/, FetchData(url)];
                case 1:
                    data = _e.sent();
                    console.log("Fetched Data:", data);
                    return [2 /*return*/, data];
            }
        });
    });
}
