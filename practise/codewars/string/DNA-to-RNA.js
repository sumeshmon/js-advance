function DNAtoRNA(value) {
    // return value.replace(/[T,t]/g, 'U')
    return value.replaceAll('T','U');
}
console.log(DNAtoRNA('GCAT'));
