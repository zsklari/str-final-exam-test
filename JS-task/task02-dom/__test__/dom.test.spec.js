describe('Dom manipuláció tesztelése', () => {
    const template = `
    <ul>
        <div class="example">Hello</div>
        <div>Hello</div>
        <div class="example">Hello</div>
        <div>Hello</div>
        <div class="example">Hello</div>
    </ul>
    `;

    beforeEach(() => {
        document.body.innerHTML = template;
    });

    test('Example osztályú elemek háttere vörös és betűstílus dőlt', () => {
        const { changeElements } = require('../dom');
        changeElements();
        const targets = document.querySelectorAll(`ul div.example`);
        expect(targets[0].style.backgroundColor).toBe('red');
        expect(targets[0].style.fontStyle).toBe('italic');
        expect(targets[1].style.backgroundColor).toBe('red');
        expect(targets[1].style.fontStyle).toBe('italic');
        expect(targets[2].style.backgroundColor).toBe('red');
        expect(targets[2].style.fontStyle).toBe('italic');
    });
});