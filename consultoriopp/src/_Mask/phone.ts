const phoneMask = (phone: number) => {
    if (phone.toString().length === 10) {
        const phoneUpdate = phone
            .toString()
            .replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");

        return phoneUpdate;
    }
    if (phone.toString().length === 11) {
        const phoneUpdate = phone
            .toString()
            .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");

        return phoneUpdate;
    }
    return "Telefone invalido";
};

export default phoneMask;
