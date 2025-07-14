export const GET = async () => {
  const response = await fetch("https://api.yookassa.ru/v3/payments", {
    body: JSON.stringify({
      amount: {
        value: "999.00",
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: "https://equix.ru/profile/guide",
      },
      capture: true,
      description: "EQUIX",
      receipt: {
        customer: {
          email: "user@example.com",
        },
        items: [
          {
            description: "equix",
            quantity: 1,
            amount: {
              value: "999.00",
              currency: "RUB",
            },
            vat_code: 1,
            payment_mode: "full_prepayment",
            payment_subject: "commodity",
          },
        ],
      },
    }),
    // @ts-ignore
    headers: {
      Authorization:
        `Basic ${process.env["AUTH_TOKEN"]}`,
      "Content-Type": "application/json",
      "Idempotence-Key": String(Date.now()),
      '457787': process.env["SHOP_KEY"],
    },
    method: "POST",
  });

  const json = await response.json();

  return Response.json(json);
};
