import axios from 'axios';

const proxy = async(req, res) => {
  try {
    const { query } = req;
    const url = `https://newsapi.org/v2/everything?apiKey=70d953a5a90d4092b11bd270b65c7b69&sortBy=relevancy&language=en&q=${query.q}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data from News API' });
  }
}

export default proxy