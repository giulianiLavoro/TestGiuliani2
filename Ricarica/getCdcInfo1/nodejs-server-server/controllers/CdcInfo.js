'use strict';

var url = require('url');

var CdcInfo = require('./CdcInfoService');



module.exports.getCdcInfo = function getCdcInfo (req, res, next) {
  CdcInfo.getCdcInfo(req.swagger.params, res, next);
};
