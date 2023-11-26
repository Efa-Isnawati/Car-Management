
# Binar Car Management
## Getting Started 

Didalam repository ini terdapat code untuk memenuhi kebutuhan challenge chapter 7 tentang tampilan frontend dari Binar Car Management. Repository ini menggunakan React JS dalam mengimplementasikan code untuk menampilkan display (tampilan) kedua page yaitu Landing Page dan juga Cars Page (untuk rental).

Untuk membuat tampilan Landing Page dan Cars Page sendiri itu memanfaatkan UI Framework (React-Bootstrap), Component, State, Property, dan Styling pada tampilan tersebut. Selain itu, kedua page ditampilkan dengan menggunakan router.

## Install React
```sh
npx create-react-app challenge-chapter-7
```
## Install React Bootstrap
```sh
npm install react-bootstrap
```
Untuk HTTP Server tampilan itu sendiri, disajikan dengan:
```sh
Landing Page
<Route path="/" element={<LandingPage />} /> 

Cars Page (Rent)
<Route path="/cars" element={<CarsPage />} />
```
Data mobil yang ditampilkan berasal dari endpoint yang sudah disediakan dari Binar itu sendiri dengan memanfaatkan Fetch API untuk GET datanya.

```sh
fetch('http://example.com/cars.json')
  .then(response => response.json())
  .then(data => console.log(data));
```
Data mobil yang ditampilkan di Cars Page itu juga menggunakan filter, data tersebut terdiri dari tipe driver, tanggal, waktu jemput/ambil, dan jumlah penumpang. Selain itu, terdapat alert untuk memberitahu user agar mengisi form sebelum menekan button Cari Mobil.



