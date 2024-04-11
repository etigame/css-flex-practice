export default function FAQ() {
  return (
    <section className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <img src="https://flex-practise.netlify.app/img/1.jpeg" alt="old man" />
      <details className="faq-item">
        <summary>What is Flex?</summary>
        <p>
          Flex is a powerful CSS layout model that allows you to create flexible
          and responsive designs. It's particularly useful for building complex
          layouts with ease.
        </p>
      </details>

      <details className="faq-item">
        <summary>How can I toggle dark mode?</summary>
        <p>
          To toggle dark mode, click on the sun/moon icon in the top right
          corner of the page. This will switch between light and dark modes
          based on your preference.
        </p>
      </details>

      <details className="faq-item">
        <summary>Is Flex suitable for beginners?</summary>
        <p>
          Yes, Flex is beginner-friendly and provides a straightforward way to
          create layouts. It's a great starting point for those learning CSS.
        </p>
      </details>

      <details className="faq-item">
        <summary>
          Can I use Flex in combination with other CSS frameworks?
        </summary>
        <p>
          Absolutely! Flex can be used alongside other CSS frameworks like
          Bootstrap or Tailwind CSS. It's designed to be flexible and can
          complement existing stylesheets.
        </p>
      </details>

      <details className="faq-item">
        <summary>Are there any resources for learning more about Flex?</summary>
        <p>
          Yes, there are various online resources, tutorials, and documentation
          available to help you master Flex. Check out the official
          documentation and online tutorials for in-depth learning.
        </p>
      </details>

      <details className="faq-item">
        <summary>What browsers support Flex?</summary>
        <p>
          Flex is supported by all major modern browsers, including Google
          Chrome, Firefox, Safari, and Microsoft Edge. Ensure your users are
          using up-to-date browsers for the best experience.
        </p>
      </details>

      <details className="faq-item">
        <summary>Is Flex better than Grid for layout?</summary>
        <p>
          Flex and Grid serve different layout needs. Flex is great for
          one-dimensional layouts, while Grid is ideal for two-dimensional
          layouts. The choice depends on the specific requirements of your
          design.
        </p>
      </details>
    </section>
  )
}
