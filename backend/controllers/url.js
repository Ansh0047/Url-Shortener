import shortid from "shortid";
import URL from "../model/url.js";

export const generateURL = async (req, res) => {
  const shortId = shortid.generate();

  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const pattern = /^https?:\/\//i;

  if(!pattern.test(body.url)){
    body.url = "https://" + body.url;
  }

  await URL.create({
    shortId,
    redirectURL: body.url,
    views: 0,
    vistHistory: [],
  });

  res.json({ id: shortId });
};

export const redirectToURL = async (req, res) => {
  const { shortId } = req.params;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $inc: { views: 1 },
      $push: {
        vistHistory: { timeStamp: Date.now() },
      },
    }
  );
  // res.json(entry);
  // console.log(entry);
  res.redirect(entry.redirectURL);
};

export const getAnalytics = async (req, res) => {
  const { shortId } = req.params;

  const entry = await URL.findOne({ shortId });

  res.json({vistHistory : entry.vistHistory, views : entry.views});
};
