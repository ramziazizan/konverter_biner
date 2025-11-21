function konversi() {
    // Ambil nilai dari input pengguna
    const binerString = document.getElementById('binerInput').value.trim();
    const errorPesan = document.getElementById('pesanError');
    
    // Reset pesan error
    errorPesan.textContent = '';
    
    // Validasi Input: Pastikan hanya ada '0' dan '1'
    if (!/^[01]+$/.test(binerString) || binerString.length === 0) {
        errorPesan.textContent = '❌ Input tidak valid. Masukkan hanya digit 0 atau 1.';
        // Reset hasil
        document.getElementById('desimal').textContent = '--';
        document.getElementById('oktal').textContent = '--';
        document.getElementById('heksadesimal').textContent = '--';
        return;
    }

    try {
        // 1. Konversi Biner ke Desimal (Basis 10)
        // parseInt(string, basis_asal)
        const desimal = parseInt(binerString, 2);
        
        // 2. Konversi Desimal ke Basis Lain
        // .toString(basis_tujuan)
        const oktal = desimal.toString(8);
        const heksadesimal = desimal.toString(16).toUpperCase();

        // 3. Tampilkan Hasil ke Halaman Web
        document.getElementById('desimal').textContent = desimal;
        document.getElementById('oktal').textContent = oktal;
        document.getElementById('heksadesimal').textContent = heksadesimal;
        
    } catch (e) {
        errorPesan.textContent = 'Terjadi kesalahan saat konversi.';
    }
}
