// /**
//  * @author Marina Mardhan
//  * sangat berharap semoga bisa menang, karena sangat menginginkan sekali keyboard itu
//  * semoga bisa dapat juara 1 dan hadiah itu bisa jadi kado ulang tahun ku yang sangat berharga
//  * keyboard itu kebetulan adalah incaran saya dan habis lebaran ingin beli, itupun juga kalau ada uang
//  * sangat ingin merasakan ngoding pakai keyboard mechanical dan sekaligus menunjukan ke orang tua bahwa mengeluarkan uang untuk join kelas premium itu tidak sia-sia
//  * semoga bisa membuktikan bahwa usaha belajarku ini niat untuk memperdalam ilmu pemrograman, karena saya sering didepan laptop ini dan dikira main game
//  * saya biasa dimarahi dikira main game padahal sedang fokus belajar pemrograman
//  *
//  * Spesial thanks untuk wegodev yang telah mengadakan lomba ini
//  * bisa menjadi wadah bagi saya untuk memperdalam ilmu dan mengasah melalui lomba/events yang sangat menarik
//  * semoga bisa menambah prestasi
//  *
//  * maaf kalau pattern nya berantakan karena saya masih kelas 1 smk dan baru sekitar 8 bulan memegang coding
//  * saya selama itu belajar otodidak karena dari sekolah tidak diajarkan, biasa belajar dari youtube
//  * ini adalah pertamakalinya saya join kelas premium yang berbayar dan karena belum ada penghasilan masih meminjam uang orang tua. Saya berharap nanti dapat mengganti uang itu ketika sudah bekerja
//  */

// const $ = a => document.querySelector(`${a}`);
// const dropdown = $("#dropdownMenuButton1");
// const search = $("#search");
// const loading = $("#search_loading");
// // eslint-disable-next-line no-restricted-globals
// const refresh = a => location.reload(a);

// loading.style.visibility = "hidden";

// const getAPI = () => {
//   return new Promise((resolve, reject) => {
//     // eslint-disable-next-line no-undef
//     axios
//       .get(
//         `https://newsapi.org/v2/everything?q=${search.value}&from=2021-02-24&sortBy=publishedAt&apiKey=1e132d01ae8043a9810440981945a39b`,
//         {
//           params: {
//             pageSize: 10,
//           },
//         }
//       )
//       .then(res => resolve(res.data.articles))
//       .catch(err => reject(err));
//   });
// };

// search.addEventListener("keyup", function () {
//   refresh(true);
//   loading.style.visibility = "visible";
//   dropdown.dispatchEvent(new MouseEvent("click"));
//   // search.dispatchEvent(new KeyboardEvent("enter"));
//   // menuItem.textContent = this.value;
//   const navbarAPI = async () => {
//     const result = await getAPI()
//       .then(res => {
//         loading.style.visibility = "hidden";
//         return res;
//       })
//       .catch(err => {
//         loading.style.visibility = "hidden";
//         return err;
//       });
//     console.log(result);
//   };
//   navbarAPI();
// });
