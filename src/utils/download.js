export const handleDownloadCatalog = (fileContent, fileName) => {
    const blob = new Blob([fileContent], { type: 'application/pdf' });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName; // Устанавливаем имя файла для скачивания

    link.click();

    window.URL.revokeObjectURL(url);
};
