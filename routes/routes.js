const express = require('express');
const controllers = require('../controllers/control');
const bigquerycontroller = require('../controllers/bigquerycontroller')
const bigqueryemail = require('../controllers/bigqueryemail')
const router = express.Router()

router.get('/mail/subject/:subject',controllers.bysubject);
router.get('/mail/:email',controllers.bymail);
router.get('/mail/text/:text',controllers.bytext);
router.get('/query/campaignid/:Campaign_ID',bigquerycontroller.getbycampaignid)
router.get('/query/productname/:Product_Name',bigquerycontroller.getbyProduct_Name)
router.get('/query/fsnid/:FSN_ID',bigquerycontroller.getbyFSN_ID)
router.get('/query/adgroupid/:Ad_Group_ID',bigquerycontroller.getbyAd_Group_ID)
router.get('/query/adgroupname/:AdGroup_Name',bigquerycontroller.getbyAdGroup_Name)
router.get('/query/views/max',bigquerycontroller.getmaxviews)
router.get('/query/views/min',bigquerycontroller.getminviews)
router.get('/query/field/sum',bigquerycontroller.sumfield)
router.get('/query/campaignidandviews/:Campaign_ID',bigquerycontroller.getbycampaignidviewslessthan_50)
router.get('/bigquery/mail/:text',bigqueryemail.fetchEmailsAndInsertIntoBigQuery)
module.exports = router;