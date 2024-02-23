require('dotenv').config();
const { BigQuery } = require('@google-cloud/bigquery');
const bigquery = new BigQuery();

const getbycampaignid = async (req, res) => {
  try {
    const Campaign_ID = req.params.Campaign_ID
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\` where Campaign_ID = '${Campaign_ID}' LIMIT 1000`;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
       return res.status(400).json({error:"no rows returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json(err)
  }
}
const getbyProduct_Name = async (req, res) => {
  try {
    const Product_Name = req.params.Product_Name
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\` where Product_Name= '${Product_Name}' `;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
      return res.status(400).json({error:"no rows returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json(err)
  }
}
const getbyFSN_ID = async (req, res) => {
  try {
    const selectedFields = 'Campaign_ID, AdGroup_Name, Ad_Spend, Product_Name';
    const FSN_ID = req.params.FSN_ID
    const query = `SELECT ${selectedFields} FROM \`gmail-api-test-415008.barathdata.sampledata\` where FSN_ID = '${FSN_ID}' LIMIT 1000`;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
      return res.status(400).json({error:"no rows returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json(err)
  }
}
const getbyAd_Group_ID = async (req, res) => {
  try {
    
    const Ad_Group_ID = req.params.Ad_Group_ID
    const query = `SELECT  * FROM \`gmail-api-test-415008.barathdata.sampledata\` where Ad_Group_ID = '${Ad_Group_ID}' Limit 1000`;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
      return res.status(400).json({error:"no rows returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json(err)
  }
}
const getbyAdGroup_Name = async (req, res) => {
  try {
    const AdGroup_Name= req.params.AdGroup_Name
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\` where AdGroup_Name= '${AdGroup_Name}' `;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
      return res.status(400).json({error:"no rows returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
  }
}
const getmaxviews = async (req, res) => {
  try {
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\`WHERE CAST(Views AS int64) = (
      SELECT MAX(CAST(Views AS INT64)) FROM \`gmail-api-test-415008.barathdata.sampledata\`)`;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
      return res.status(400).json({error:"no data returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:',err);
    res.status(500).json(err)
  }
}
const getminviews = async (req, res) => {
  try {
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\`WHERE CAST(Views AS int64) = (
      SELECT MIN(CAST(Views AS INT64)) FROM \`gmail-api-test-415008.barathdata.sampledata\`)`;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
      return res.status(400).json({error:"no data returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:',err);
    res.status(500).json({err})
  }
}
const sumfield = async (req, res) => {
  try {
    const query =`SELECT 
    campaign_ID,
    (SELECT SUM(CAST(views AS INT64)) FROM \`gmail-api-test-415008.barathdata.sampledata\` AS total_views WHERE total_views.campaign_ID = sampledata.campaign_ID) AS total_views,
    (SELECT SUM(CAST(clicks AS INT64)) FROM \`gmail-api-test-415008.barathdata.sampledata\` AS total_clicks WHERE total_clicks.campaign_ID = sampledata.campaign_ID) AS total_clicks,
    (SELECT SUM(CAST(Ad_spend AS FLOAT64)) FROM \`gmail-api-test-415008.barathdata.sampledata\` AS total_AdSpend WHERE total_AdSpend.campaign_ID = sampledata.campaign_ID) AS total_AdSpend
FROM 
    (SELECT DISTINCT campaign_ID FROM \`gmail-api-test-415008.barathdata.sampledata\` )AS sampledata`;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
       return res.status(400).json({error:"no rows returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json(err)
  }
}
const getbycampaignidviewslessthan_50 = async (req, res) => {
  try {
    const Campaign_ID = req.params.Campaign_ID
    const query = `SELECT *FROM \`gmail-api-test-415008.barathdata.sampledata\`WHERE Campaign_ID = '${Campaign_ID}' and 
    CAST(Views AS INT64) > 100`;
    const [rows] = await bigquery.query(query);
    if (!rows || rows.length === 0) {
       return res.status(400).json({error:"no rows returned"})
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json(err)
  }
}
module.exports={getbycampaignid,getbyProduct_Name,getbyFSN_ID,getbyAd_Group_ID,getbyAdGroup_Name,getmaxviews,getminviews,sumfield,getbycampaignidviewslessthan_50};