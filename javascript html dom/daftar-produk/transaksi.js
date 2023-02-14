function tambahTransaksi(form) {
    document.getElementById('history').innerHTML = 'History Penjualan';
    console.log(form);
    transaksiPenjualan.inputTransaksi(form);
    transaksiPenjualan.menampilkanHistoryPenjualan();

}

const transaksiPenjualan = {
    transaksi: {
        index: -1,
        nama: null,
        harga: null,
        stok: null,
        gambar: null,
        jumlah: null,
        total: null,
        tunai: null,
        kembalian: null
    },
    daftarTransaksi: [],
    inputTransaksi: function (form) {
        this.transaksi.index = form.index.value;
        this.transaksi.nama = form.nama.value;
        this.transaksi.harga = form.harga.value;
        this.transaksi.stok = form.stok.value;
        this.transaksi.gambar = form.gambar.value;
        this.transaksi.jumlah = form.jumlah.value;
        this.transaksi.total = form.total.value;
        this.transaksi.tunai = form.tunai.value;
        this.transaksi.kembalian = form.kembalian.value;

        if(!this.transaksi.nama) {
            alert('Nama produk tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.harga) {
            alert('harga produk tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.stok) {
            alert('Stok produk tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.gambar) {
            alert('Link gambar produk tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.jumlah) {
            alert('Jumlah tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.total) {
            alert('Total harga tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.tunai) {
            alert('Tunai tidak boleh kosong!');
            return false;
        }
        if(!this.transaksi.kembalian) {
            alert('Kembalian tidak boleh kosong!');
            return false;
        }
        if(this.transaksi.index == -1) {
            this.daftarTransaksi.push(copy(this.transaksi));
        } else {
            this.daftarTransaksi[this.transaksi.index] = copy(this.transaksi)
        }

        this.resetFormTransaksi(form);
    },
    resetFormTransaksi (form) {
        this.transaksi.index = -1;
        this.transaksi.nama = null;
        this.transaksi.harga = null;
        this.transaksi.stok = null;
        this.transaksi.gambar = null;
        this.transaksi.jumlah = null;
        this.transaksi.total = null;
        this.transaksi.tunai = null;
        this.transaksi.kembalian = null;

        form.index.value = this.transaksi.index;
        form.nama.value = this.transaksi.nama;
        form.harga.value = this.transaksi.harga
        form.stok.value = this.transaksi.stok;
        form.gambar.value = this.transaksi.gambar;
        form.jumlah.value = this.transaksi.jumlah;
        form.total.value = this.transaksi.total;
        form.tunai.value = this.transaksi.tunai;
        form.kembalian.value = this.transaksi.kembalian;
    },
    menampilkanHistoryPenjualan: function () {
        const componentDaftarTransaksi = document.getElementById('daftar-transaksi');
        componentDaftarTransaksi.innerHTML = '';
        this.daftarTransaksi.forEach((transaksi, index) => {
            componentDaftarTransaksi.innerHTML += `${transaksi.nama} <br> ${transaksi.harga} <br> Stok: ${transaksi.stok} <br> Jumlah: ${transaksi.jumlah} <br> Total Harga: ${transaksi.total} <br> Tunai: ${transaksi.tunai} <br> Kembalian: ${transaksi.kembalian} <br> <img src="${transaksi.gambar}" width="150px" height="150px"> <br> -------------------------------- <br>`;
        });
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}