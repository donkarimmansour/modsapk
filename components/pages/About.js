import Link from "next/link"

const About = () => {
  return (
    <main id="primary">
      <section className="no-padding-top">
        <div className="container">
          <article id="article" className="center">
            <div className="entry-content">
              <div className="wp-block-cover alignfull has-black-background-color has-background-dim"><img data-perfmatters-preload={2} decoding="async" importance="high" width={1920} height={680} className="wp-block-cover__image-background wp-image-2017" alt="about apkmody" src="./index_files/about-apkmody.jpg" data-object-fit="cover" /><div className="wp-block-cover__inner-container">
                <h1 className="has-larger-font-size has-text-align-center has-white-color has-text-color" id="h-about-apkmody">About APKMODY</h1>
                <p className="has-text-align-center">“Build an open space for technology lovers, game lovers, and writing lovers.”</p>
              </div></div>
              <p>It was the mission of <Link href="/">APKMODY</Link> when it was born. We do not want to be the most visited website or the quickest. We want to become a very private space, with lots of interesting things to read, and where everyone is welcome.</p>
              <p>Do you believe? We, young people with passion and enthusiasm, have researched and built this website starting with the number zero. And we have worked hard, dedicating time and money to build a common playground for you, also for ourselves.</p>
              <h2 className="has-medium-font-size" id="h-just-for-fun">Just for fun</h2>
              <p><strong>APKMODY </strong>is set up with the main criterion is Fun, so the articles on the website always featured the fun, <g className="gr_ gr_7 gr-alert sel gr_spell gr_replaced gr_inline_cards gr_disable_anim_appear ContextualSpelling multiReplace" id={7} data-gr-id={7}>humor</g>. During the reading, if you see the negative articles &amp; negative contents, please report to ours. We would like to read all your comments and feedback, so your voices will be heard.</p>
              <h2 className="has-medium-font-size" id="h-creative-simple-and-mindful">Creative, simple, and mindful</h2>
              <p>You can see, APKMODY simple from the interface. We want to bring you the best information quickly, so we always try to ensure:</p>
              <ul><li>Information must be authentic</li><li>Content goes straight to the problem, not rampant</li><li>Centralized presentation and enhance the content</li><li>Speed is the top priority</li></ul>
              <h2 className="has-medium-font-size" id="h-always-welcome-new-members">Always welcome new members</h2>
              <p>From the day of establishment, APKMODY Team consists of 4 – 5 peoples. We know that only we are not enough to create an open and private space as a mission, so APKMODY always needs contributions from the community. APKMODY always welcomes those who love writing, love the technology to develop APKMODY with us. With APKMODY, you will also have your own space and open to express your own personality in the most comfortable way. You will never have to write an order, in a conventional structure or manner.</p>
              <p><strong>You must always be yourself</strong>, that’s what we want.</p>
              <h2 className="has-medium-font-size" id="h-just-the-beginning">Just the beginning</h2>
              <p>From now on, we know that it is difficult to operate and develop a website. However, this is just the beginning. We hope this road will be a little bit thorny (though know very much) but hopefully, every compliment, encouragement like “your interface is pretty” or simply a comment is enough energy for us to continue this journey.</p>
              <p>Hey! Reading from the beginning to the end is tired or not?</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default About