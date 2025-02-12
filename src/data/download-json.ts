export function downloadJson(json: string) {
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'job-search.json';
    a.style.visibility = 'hidden';
    a.style.position = 'absolute';
    document.body.append(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
}
