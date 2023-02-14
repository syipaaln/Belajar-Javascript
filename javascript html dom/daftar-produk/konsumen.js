function tambahKonsumen(form) {
    console.log(form);
    halamanKonsumen.inputKonsumen(form);
    halamanKonsumen.menampilkanDaftarKonsumen();
}

const halamanKonsumen = {
    konsumen: {
        index: -1,
        namaKonsumen: null,
        alamatKonsumen: null,
        noHP: null,
        email: null
    },
    daftarKonsumen: [],
    inputKonsumen: function (form) {
        this.konsumen.index = form.index.value;
        this.konsumen.namaKonsumen = form.namaKonsumen.value;
        this.konsumen.alamatKonsumen = form.alamatKonsumen.value;
        this.konsumen.noHP = form.noHP.value;
        this.konsumen.email = form.email.value;

        if(!this.konsumen.namaKonsumen) {
            alert('Nama tidak boleh kosong!');
            return false;
        }

        if(!this.konsumen.alamatKonsumen) {
            alert('Alamat tidak boleh kosong!');
            return false;
        }

        if(!this.konsumen.noHP) {
            alert('No HP tidak boleh kosong!');
            return false;
        }

        if(!this.konsumen.email) {
            alert('Email produk tidak boleh kosong!');
            return false;
        }

        if(this.konsumen.index == -1) {
            this.daftarKonsumen.push(copy(this.konsumen));
        } else {
            this.daftarKonsumen[this.konsumen.index] = copy(this.konsumen)
        }

        this.resetFormKonsumen(form);
    },
    
    resetFormKonsumen: function (form) {
        this.konsumen.index = -1;
        this.konsumen.namaKonsumen = null;
        this.konsumen.alamatKonsumen = null;
        this.konsumen.noHP = null;
        this.konsumen.email = null;

        form.index.value = this.konsumen.index;
        form.namaKonsumen.value = this.konsumen.namaKonsumen;
        form.alamatKonsumen.value = this.konsumen.alamatKonsumen;
        form.noHP.value = this.konsumen.noHP;
        form.email.value = this.konsumen.email;

        document.getElementById('btn-save-konsumen').innerHTML = 'Simpan';
    },
    menampilkanDaftarKonsumen: function () {
        const componentDaftarKonsumen = document.getElementById('daftar-konsumen');
        componentDaftarKonsumen.innerHTML = '';
        this.daftarKonsumen.forEach((konsumen, index) => {
            componentDaftarKonsumen.innerHTML += `Nama: ${konsumen.namaKonsumen} <br> Alamat: ${konsumen.alamatKonsumen} <br> No HP: ${konsumen.noHP} <br> Email: ${konsumen.email} <br> <button onclick="halamanKonsumen.editKonsumen(${index})">Edit</button> <button onclick="halamanKonsumen.hapusKonsumen(${index})">Hapus</button> <br> ---------------------------- <br>`;
        });
    },
    hapusKonsumen: function (index) {
        if(confirm('Apakah anda yakin ingin menghapus ini?')) {
            this.daftarKonsumen.splice(index, 1);
            this.menampilkanDaftarKonsumen();
        }
    },
    editKonsumen: function(index) {
        const konsumen = this.daftarKonsumen[index];
        const form = document.getElementById('form-konsumen');
        form.index.value = index;
        form.namaKonsumen.value = konsumen.namaKonsumen;
        form.alamatKonsumen.value = konsumen.alamatKonsumen;
        form.noHP.value = konsumen.noHP;
        form.email.value = konsumen.email;

        document.getElementById('btn-save-konsumen').innerHTML = 'Edit';
    }
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}