export default async function handler(req, res) {
  const { castUrl, token, amount, perUser } = req.body;

  if (!castUrl || !token || !amount || !perUser) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  // Log the burst request (replace this with smart contract call)
  console.log("TokenBurst request:");
  console.log("Cast URL:", castUrl);
  console.log("Token:", token);
  console.log("Total Amount:", amount);
  console.log("Per User Amount:", perUser);

  res.json({ success: true });
}
