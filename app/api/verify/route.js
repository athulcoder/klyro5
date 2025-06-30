export async function POST(req) {
  const { fullName, phone, email } = await req.json();

  console.log(fullName, phone, email);
  

}
