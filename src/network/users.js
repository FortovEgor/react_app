export async function loadUsersList(pageSize, offset) {
    const query = { pageSize: 10, offset };  // pageSize = сколько товаров показываем за одну итерацию!!!
    if (!query.offset) delete query.offset;
    const params = new URLSearchParams(query);
    const url = `https://api.airtable.com/v0/appFqc0tChtXm54YE/Users?${params}`;
    const token = "patlXBsck6WSBPvTN.ac17f97b880b023ac9e8bd2de3da7eaab2bbe3f45a1f4cc4d391c8871314215b";
    
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` }});
    const data = await response.json();

    if (response.ok) {
        data.records = data.records.map(el => el.fields);
    } else {
        data.records = data.records.map(el => "-1");
        // return "Ошибка соединения!";
    }

    return data;
}