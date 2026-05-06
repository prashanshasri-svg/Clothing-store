export const products = [
    {
        id: 'p1',
        name: 'Urban Utility Parka',
        price: 185.00,
        category: 'Men',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGt9BsJopaFeqlgLPSV_EmOMwQTiN4P9uYnVMaGpr-lkw52zRB_Zrux-A3pN2CpDT6C27X-cXZ-DF-i4ZJbwESgWUzLaKuCWu8ds1uF2TR6fRj7e73pLtSQNL-ROZEqLX6l9IK8mtTfX2Rp1AGehRSfNnrRk7_RQcOCRAuVGwCkDrXsF5Cu2gKHJguZ-HNgCTiiLU8S7ePZslAwGAvviJ93aSXSy6AfwTy4LOXd848IK477bvWGH1W8cgJekDqL0nBDqfjzC71EQ',
        badge: 'ORGANIC',
        description: 'A high-quality minimalist jacket in charcoal grey. Features technical texture and sleek tailoring.'
    },
    {
        id: 'p2',
        name: 'Moto Leather Jacket',
        price: 320.00,
        category: 'Men',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHn5X7b0ZBkd5EgmEbgD20w85rGdgxED4QJPZ2UPShn6RnwRUVGH8wCGZYgMw4Yeg0g3RnuTaCsJA5Be2eGH2NNugG--IZTLHCd_RVIa3lIHFXABx3dy831ptzFH2e0OZZpn7R8a0Hja9zQgYZgBmDthfGR3UtdG1JrAtg8QaYkMltGWeBQxuo8V60bQgnvdWtugzSiWOVXuE408203-tk-QiA-HDroGVDNCE5WwN87EBu3hJeL8iyZ5aBXhEVnUWqhzf_cKGHkw',
        badge: null,
        description: 'Minimalist black leather motorcycle jacket. Embodies a sophisticated urban cool aesthetic.'
    },
    {
        id: 'p3',
        name: 'Linen Studio Pant',
        price: 145.00,
        category: 'Women',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuZp8OP6j7iV7naLULHAR5qnk-TnAzEQtBM7xoYMQ947kD1BupMldUPFn2sxC7Kl3vnYxQPnbYF9djJb0GUPzE2aVDo5Mm2YCZa1mhAi-7LZcbjqWwv2ce_R5h33NpQrY4rjQ-6o0WBJ8sdhDaV9a8svNEwCuLMjc8FXsJDFEMW8xiE5kwwrTANovb1Onyfv1xFkrmFJaT6WZsdGPax5GlAh_oJVsoIIXuC0t-1J8i9WvrPhkAs3vfAOh6Bfe5w59CXM9y9pGKEg',
        badge: null,
        description: 'Ivory wide-leg trousers crafted from premium linen. Lightweight and comfortable.'
    },
    {
        id: 'p4',
        name: 'Heavyweight Tee',
        price: 55.00,
        category: 'Men',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkv2UWnSNRYrx23LwoAAmFb1DMTn5AjoAxAbA2IBgHTkZlI2_UYh7A-SGj_TEDgiryC6NNxk7wwYnUVIXCUqdfFJSpnT4wwN9jvUAuwsDfUkp1Cyjh3nYQH6gocZzeSvrFlNYMeeA9oT0zrc5Ao1F7P3TYlMPlFITAxvM8eMLz8jyXwxJZdYrxtY_9Hlkqk2498rTiEiMaJNjEIH1FhTSqXK1SeJ29wewGpdUc84uHUTXtl1y_Q2DmLC5uhEYIcw8j6gwkgoAi2A',
        badge: null,
        description: 'Premium, heavyweight cotton t-shirt. Emphasizing texture and durability.'
    },
    {
        id: 'p5',
        name: 'Essential Oversized Hoodie',
        price: 85.00,
        category: 'Men',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2350pU1qVlIUBn-eK0uI_V7G4jYt8hA2k5pX1M5n8P6q7E6h3oQ1T7Z4p_G6e2Y3y_K5k2r7h3n_R8s6l8w5r5o_Z2q3p_R5l8y2t7y_X1q4y2p7q2r6l8y2_s7v6x_K7l5m_W8d6m_D5f8l9p_N5n9p2p6q3l_Z4t8m_B5v8m2t_X7y5o_T8l9r_P5m6o_M2y4p_S5n8o2p_T7l8q_K5r9m_N7x6o_D2r6l8y_P5', // Placeholder
        badge: 'BESTSELLER',
        description: 'A luxuriously soft, heavy-loopback cotton hoodie. The drop-shoulder cut provides a relaxed, modern silhouette.'
    },
    {
        id: 'p6',
        name: 'Oversized Knit Sweater',
        price: 110.00,
        category: 'Women',
        image: './womens_knit_sweater_1778009701232.png',
        badge: 'NEW',
        description: 'A cozy, oversized cream knit sweater made from premium sustainable wool. Perfect for layering in colder months.'
    },
    {
        id: 'p7',
        name: 'Tailored Trench Coat',
        price: 245.00,
        category: 'Women',
        image: './womens_trench_coat_1778009935470.png',
        badge: null,
        description: 'A modern, tailored beige trench coat. Classic design meets minimalist urban aesthetic for a timeless outerwear piece.'
    }
];

export function getProductById(id) {
    return products.find(p => p.id === id);
}
