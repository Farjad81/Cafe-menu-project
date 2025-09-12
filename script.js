const categories = document.getElementById("categories");
const productsContainer = document.getElementById("products");

// دیتا برای محصولات هر کتگوری
const productsData = {
    COFFEE: [
        { name: "اسپرسو کنیا", price: "92,000", img: "" },
        { name: "اسپرسو کلمبیا", price: "90,000", img: "" },
        { name: "اسپرسو 70%روبستا-30%عربیکا", price: "85,000", img: "" },
        { name: "اسپرسو 50%روبوستا-50%عربیکا", price: "85,000", img: "" },
        { name: "آمریکانو", price: "بر اساس لاین قهوه انتخابی", img: "" },
        { name: "کاپوچینو", price: "99,000", img: "" },
        { name: "موکا", price: "114,000", img: "" },
        { name: "کورتادو", price: "95,000", img: "../images/items/coffee/test.jpg" },
        { name: "آفوگاتو", price: "106,000", img: "" },
        { name: "لاته", price: "101,000", img: "" },
        { name: "آیریش لاته", price: "120,000", img: "" },
        { name: "کارامل لاته", price: "118,000", img: "" },
        { name: "نارگیل لاته", price: "118,000", img: "" },
        { name: "فندق لاته", price: "120,000", img: "" },
        { name: "آیس آمریکانو", price: "بر اساس لاین قهوه انتخابی", img: "" },
        { name: "آیس لاته", price: "106,000", img: "" },
        { name: "آیس امبر", price: "118,000", img: "" },
        { name: "آیس موکا", price: "120,000", img: "" },
        { name: "پروتئین قهوه", price: "190,000", img: "" },
        { name: "کمکس", price: "-", img: "" },
        { name: "V60", price: "-", img: "" },
        { name: "قهوه ترک", price: "-", img: "" },
    ],
    CAKE: [
        { name: "وافل", price: "240,000", img: "" },
        { name: "کیک روز", price: "-", img: "" },
    ],
    SHAKE: [
        {name:"نوتلا",price:"143,000",img:""},
        {name:"بادام زمینی",price:"136,000",img:""},
        {name:"کارامل",price:"116,000",img:""},
        {name:"کیت کت",price:"156,000",img:""},
        {name:"اسنیکرز",price:"156,000",img:""},
        {name:"شکلات",price:"116,000",img:""},
        {name:"تیرامیسو",price:"123,000",img:""},
    ],
    TEA: [
        {name:"چای",price:"64,000",img:""},
        {name:"چای سفید",price:"104,000",img:""},
        {name:"چای ترش",price:"74,000",img:""},
        {name:"چای سبز",price:"74,000",img:""},
        {name:"اورنج دریم",price:"78,000",img:""},
        {name:"لمون گرین",price:"78,000",img:""},
    ],
    HOT: [
        {name:"ماچا",price:"104,000",img:""},
        {name:"ماچا نارگیل",price:"126,000",img:""},
        {name:"ماچا کارامل",price:"126,000",img:""},
        {name:"شیر آیریش",price:"106,000",img:""},
        {name:"هات چاکلت",price:"102,000",img:""},
        {name:"هات چاکلت پسته",price:"122,000",img:""},
        {name:"هات چاکلت ایتالیایی",price:"120,000",img:""},
        {name:"ماسالا",price:"72,000",img:""},
    ],
    COLD: [
        {name:"پاماگرنت",price:"110,000",img:""},
        {name:"سایور",price:"104,000",img:""},
        {name:"روسومارتینی",price:"106,000",img:""},
        {name:"ولنتینو",price:"110,000",img:""},
        {name:"لیچی",price:"112,000",img:""},
        {name:"موهیتو",price:"110,000",img:""},
        {name:"لیموناد",price:"108,000",img:""},
    ],
    MOCKTAILS: [
        {name:"پیناکولادا",price:"120,00",img:""},
        {name:"سیرازو",price:"124,000",img:""},
        {name:"کاردینا",price:"124,000",img:""},
    ],
    SALAD: [
        {name:"سالاد سزار",price:"240,000",img:""},
        {name:"سالاد مایا",price:"275,000",img:""},
    ],
    PASTA: [
        {name:"پاستا بلونز",price:"265,000",img:""},
        {name:"پاستا آلفردو",price:"245,000",img:""},
    ],
    BURGER: [
        {name:"برگر با سس آلفردو",price:"-",img:""},
        {name:"فیوره برگر",price:"-",img:""},
        {name:"فیله مرغ",price:"-",img:""},
    ]
};

// هندل کلیک روی کتگوری
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");
        showProducts(category);
    });
});

// نمایش محصولات یک کتگوری
function showProducts(category) {
    categories.style.display = "none";
    productsContainer.classList.remove("hidden");

    productsContainer.innerHTML = `
        <button id="backBtn" class="back-btn">بازگشت</button>
        <div class = "product-title-div">
        <h2 class="product-title">${category}  </h2>
        </div>
        <div class="product-list">
            ${productsData[category].map(item => `
                <div class="product-card">
                
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                </div>
            `).join("")}
        </div>
    `;

    // دکمه بازگشت
    document.getElementById("backBtn").addEventListener("click", () => {
        productsContainer.classList.add("hidden");
        categories.style.display = "flex";
    });
}
