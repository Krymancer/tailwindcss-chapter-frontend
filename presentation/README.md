---
marp: true
size: 16:9
---
<style>
section { justify-content: start; }
img[alt~="center"] {
  display: block;
  margin: 0 auto;
}
</style>

<style scoped>section { justify-content: center; }</style>
![Logo](assets/tailwindcss-logotype.svg)

---

# O que é?

Um framework CSS baseado em utilitários, repleta de classes como `flex`, `pt-4`, `text-center` e `rotate-90`, que podem ser compostas para criar qualquer design, diretamente no html.

```html
<div class="pt-6 flex flex-row">
    <p class="text-lg font-medium">
        Tailwind
    </p>
</div>
```
---

# Entendi, então é igual ao Boostrap?

![NOOO h:400 center](https://i.kym-cdn.com/photos/images/original/000/866/220/922.gif)

 😡 Não, não é igual ao bootstrap!!!! 😠 

---

# Bootstrap

![btsp center h:250](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png)

"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."

---

# Bootstrap

- Modificar elementos é muitooo dificil
- Quanto mais customizado forem os componentes, menos se usa bootstrap
- Todo site que usa boostrap, usa bootstrap
- Usa JQuery 💩

---

# Bootstrap

![everybtspsite h:450 center](https://miro.medium.com/v2/resize:fit:720/format:webp/0*Gj6BQVN6PvOrPXM1.png)

https://www.dagusa.com/

---

# Boostrap

Bootstrap é uma ferramenta, ela faz muito bem o que se propõe, mas quando nós não estamos desenvolvendo uma POC e precisamos criar um layout ou seguir um design system ele se torna mais e mais complicado de integrar.

---

# Tailwind

Porque usar tailwind?

- Não precisar escrever css
- Não precisar pensar em nome para classes
- Facil manuntenção

---

# Tailwind

Tailwind **NÃO** é uma extensão de CSS!!!

[Refactoring](https://www.refactoringui.com/)

[Building Your Color Palette](https://www.refactoringui.com/previews/building-your-color-palette)

[Labels are a last resort](https://www.refactoringui.com/previews/labels-are-a-last-resort)

--- 

## Nem tudo são flores

```html
<div 
  class="bg-blue-300 
        flex flex-row 
        overflow-hidden 
        transition duration-75 
        hover:bg-blue-700 
        dark:red-300 dark:hover:red-700>
</div>
```
- Alguns elementos vão ter muitas classes
- Porque não usar inline-style? (magic numbers, scope, no-processing, media-query)
- Evita repetição (componentização)

---

# Usando TailwindCSS

[Instalação](https://tailwindcss.com/docs/installation/framework-guides)