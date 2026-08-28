/* =========================================================
   SELF LOVE ACADEMY
   Powered by CathiesNest Digital
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CONFIGURATION
     ======================================================= */

  const TABING_GUHIT_URL =
    "https://cathiesnest.github.io/tabing-guhit-3.0/";

  const ALISON_WELLBEING_URL =
    "https://alison.com/psychometric-test/wellbeing?utm_source=alison_user&utm_medium=affiliate&utm_campaign=42404117";

  const SELF_LOVE_ACADEMY_URL =
    window.location.href.split("#")[0];


  /* =======================================================
     REFLECTION QUESTIONS
     ======================================================= */

  const questions = [
    {
      question:
        "When you say “yes” to something you don't really have the energy for, what are you afraid might happen if you said “no”?",

      options: [
        "They might be disappointed.",
        "They might think I'm selfish.",
        "I don't want conflict.",
        "I'm afraid they'll stop needing me.",
        "Honestly, I'm not sure."
      ],

      reflections: [
        "It's easy to protect other people's feelings while forgetting to check in with your own.",
        "Wanting to be kind doesn't mean you have to say yes to everything.",
        "Avoiding conflict can sometimes mean carrying more than you actually need to.",
        "Being needed by others doesn't have to come at the cost of being there for yourself.",
        "Not knowing is okay. Sometimes awareness begins simply by noticing the question."
      ]
    },

    {
      question:
        "If a friend made the same mistake you're currently blaming yourself for, what would you say to them?",

      options: [
        "I'd tell them everyone makes mistakes.",
        "I'd remind them that one mistake doesn't define them.",
        "I'd tell them to learn from it and keep going.",
        "I'd probably comfort them.",
        "I'm much harder on myself than I am on others."
      ],

      reflections: [
        "You already understand that mistakes are part of being human. You deserve that same understanding too.",
        "One moment cannot tell the whole story of who someone is—including you.",
        "Growth doesn't require perfection. Sometimes it simply requires the courage to continue.",
        "You know how to offer kindness. Maybe some of that kindness belongs to you, too.",
        "That realization alone can be powerful: the voice you use with yourself matters."
      ]
    },

    {
      question:
        "When you finally have free time, do you allow yourself to rest—or do you immediately look for something you should be doing?",

      options: [
        "I rest without guilt.",
        "I rest, but feel guilty.",
        "I usually find another task.",
        "I don't really know how to rest.",
        "It depends on the day."
      ],

      reflections: [
        "You seem to recognize that rest is part of a healthy rhythm, not something you have to earn.",
        "You may be discovering that rest can be valuable even when nothing has been checked off a list.",
        "Always staying busy can make stillness feel uncomfortable. You are allowed to pause.",
        "Learning how to rest is still learning. You don't have to master it overnight.",
        "Some days ask more from us than others. Listening to that difference is a form of self-awareness."
      ]
    },

    {
      question:
        "When you compare your life to someone else's, what are you usually forgetting about their story?",

      options: [
        "I don't know what they struggled through.",
        "I only see what they choose to show.",
        "Their timeline isn't mine.",
        "I forget how far I've come.",
        "I've never thought about this before."
      ],

      reflections: [
        "You are remembering that every visible success has an invisible story behind it.",
        "What we see is rarely the whole picture. Comparison often leaves out everything happening behind the scenes.",
        "Your life does not need to follow someone else's calendar.",
        "Looking backward can remind you that you have already survived and grown through things you once thought you couldn't.",
        "Sometimes the first step away from comparison is simply realizing we were comparing incomplete stories."
      ]
    },

    {
      question:
        "If you stopped worrying about disappointing other people, what is one small change you would make for yourself?",

      options: [
        "I'd finally make time for myself.",
        "I'd set a boundary.",
        "I'd try something I've been putting off.",
        "I'd choose what actually makes me happy.",
        "I'm still figuring that out."
      ],

      reflections: [
        "Making space for yourself isn't selfish. You are part of the life you're responsible for caring for.",
        "A boundary isn't necessarily a rejection of someone else. Sometimes it's a way of respecting yourself.",
        "There may be a small part of your life waiting for permission to begin.",
        "Your happiness deserves consideration too—not only everyone else's expectations.",
        "You don't have to know the whole answer today. Sometimes the question itself opens the door."
      ]
    }
  ];


  /* =======================================================
     RANDOM INSPIRATION MESSAGES
     ======================================================= */

  const inspirationMessages = [
    {
      text:
        "With hardship comes ease. Keep your faith stronger than fear. Good days are coming.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "You don't have to have everything figured out. You only need enough courage for the next small step.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "Rest is not falling behind. Sometimes slowing down is how we find our way forward.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "Your worth was never measured by how much you could do for everyone else.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "You are allowed to outgrow the version of yourself that existed only to survive.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "Starting again does not erase how far you've already come.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "Be gentle with yourself. You are still becoming.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "Some seasons are for building. Some are for healing. Both are part of growth.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "You don't need permission to take care of yourself.",
      author:
        "CathiesNest Digital"
    },

    {
      text:
        "Your next chapter does not have to look like anyone else's.",
      author:
        "CathiesNest Digital"
    }
  ];


  /* =======================================================
     STATE
     ======================================================= */

  let currentQuestion = 0;

  const answers = [];

  let lastInspirationIndex = -1;


  /* =======================================================
     ELEMENT HELPERS
     ======================================================= */

  const get = (id) =>
    document.getElementById(id);


  /* =======================================================
     GOOGLE ANALYTICS HELPER
     ======================================================= */

  function trackEvent(eventName, parameters = {}) {

    if (typeof window.gtag === "function") {

      window.gtag(
        "event",
        eventName,
        parameters
      );

    }
  }


  /* =======================================================
     QUESTION ELEMENTS
     ======================================================= */

  const questionNumber =
    get("questionNumber");

  const questionText =
    get("questionText");

  const answerOptions =
    get("answerOptions");

  const progressBar =
    get("progressBar");

  const progressText =
    get("progressText");

  const tinyReflection =
    get("tinyReflection");

  const nextButton =
    get("nextButton");

  const reflectionResult =
    get("reflectionResult");


  /* =======================================================
     START BUTTON
     ======================================================= */

  const startReflectionButton =
    get("startReflection");

  if (startReflectionButton) {

    startReflectionButton.addEventListener(
      "click",
      () => {

        const reflectionSection =
          get("reflection");

        if (reflectionSection) {

          reflectionSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

        trackEvent(
          "self_reflection_started"
        );

      }
    );

  }


  /* =======================================================
     LOAD QUESTION
     ======================================================= */

  function loadQuestion() {

    const item =
      questions[currentQuestion];

    if (!item) return;


    if (questionNumber) {

      questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");

    }


    if (questionText) {

      questionText.textContent =
        item.question;

    }


    if (progressText) {

      progressText.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    }


    if (progressBar) {

      progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    }


    if (answerOptions) {

      answerOptions.innerHTML = "";

      item.options.forEach(
        (option, index) => {

          const button =
            document.createElement("button");

          button.type = "button";

          button.className =
            "answer-option";

          button.setAttribute(
            "aria-label",
            option
          );

          button.innerHTML = `
            <span class="option-dot"></span>
            <span>${option}</span>
          `;


          button.addEventListener(
            "click",
            () => {

              selectAnswer(
                index,
                button
              );

            }
          );


          answerOptions.appendChild(button);

        }
      );

    }


    if (tinyReflection) {

      tinyReflection.textContent =
        "";

      tinyReflection.classList.remove(
        "visible"
      );

    }


    if (nextButton) {

      nextButton.disabled = true;

      nextButton.textContent =
        currentQuestion === questions.length - 1
          ? "See My Reflection →"
          : "Next →";

    }

  }


  /* =======================================================
     SELECT ANSWER
     ======================================================= */

  function selectAnswer(
    answerIndex,
    selectedButton
  ) {

    const buttons =
      answerOptions.querySelectorAll(
        ".answer-option"
      );

    buttons.forEach(
      (button) => {

        button.classList.remove(
          "selected"
        );

      }
    );


    selectedButton.classList.add(
      "selected"
    );


    answers[currentQuestion] =
      answerIndex;


    if (tinyReflection) {

      tinyReflection.textContent =
        questions[currentQuestion]
          .reflections[answerIndex];

      tinyReflection.classList.add(
        "visible"
      );

    }


    if (nextButton) {

      nextButton.disabled = false;

    }


    trackEvent(
      `question_${currentQuestion + 1}_answered`,
      {
        question_number:
          currentQuestion + 1,
        answer_number:
          answerIndex + 1
      }
    );

  }


  /* =======================================================
     NEXT QUESTION
     ======================================================= */

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      () => {

        if (
          answers[currentQuestion] ===
          undefined
        ) {
          return;
        }


        if (
          currentQuestion <
          questions.length - 1
        ) {

          currentQuestion++;

          loadQuestion();

        } else {

          finishReflection();

        }

      }
    );

  }


  /* =======================================================
     FINISH REFLECTION
     ======================================================= */

  function finishReflection() {

    trackEvent(
      "self_reflection_completed"
    );


    if (reflectionResult) {

      reflectionResult.hidden =
        false;

      reflectionResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }


    generatePersonalReflection();

    generateSmallStep();

    generateInspiration();

  }


  /* =======================================================
     PERSONAL REFLECTION
     ======================================================= */

  function generatePersonalReflection() {

    const reflection =
      get("personalReflection");

    if (!reflection) return;


    const selectedAnswers =
      answers.map(
        (answer, index) =>
          questions[index]
            .options[answer]
      );


    const boundaryAnswer =
      selectedAnswers[0] || "";

    const selfTalkAnswer =
      selectedAnswers[1] || "";

    const restAnswer =
      selectedAnswers[2] || "";

    const comparisonAnswer =
      selectedAnswers[3] || "";

    const nextChapterAnswer =
      selectedAnswers[4] || "";


    let message =
      "Your answers show that you are willing to pause and look at yourself with honesty. ";


    if (
      boundaryAnswer.includes(
        "disappointed"
      ) ||
      boundaryAnswer.includes(
        "selfish"
      ) ||
      boundaryAnswer.includes(
        "conflict"
      ) ||
      boundaryAnswer.includes(
        "needed"
      )
    ) {

      message +=
        "You may sometimes carry the weight of other people's expectations. ";

    }


    if (
      selfTalkAnswer.includes(
        "harder on myself"
      ) ||
      selfTalkAnswer.includes(
        "mistake"
      )
    ) {

      message +=
        "You also seem to recognize that the way you speak to yourself deserves attention and kindness. ";

    }


    if (
      restAnswer.includes(
        "guilty"
      ) ||
      restAnswer.includes(
        "task"
      ) ||
      restAnswer.includes(
        "don't really know"
      )
    ) {

      message +=
        "Rest may be something you are still learning to give yourself without needing to justify it. ";

    }


    if (
      comparisonAnswer.includes(
        "timeline"
      ) ||
      comparisonAnswer.includes(
        "far I've come"
      )
    ) {

      message +=
        "And there is a reminder here that your journey has its own timing. ";

    }


    if (
      nextChapterAnswer.includes(
        "myself"
      ) ||
      nextChapterAnswer.includes(
        "boundary"
      ) ||
      nextChapterAnswer.includes(
        "happy"
      )
    ) {

      message +=
        "Perhaps the next chapter is asking you to make a little more room for what you need, not only what others expect from you. ";

    }


    message +=
      "You don't need to change everything at once. Sometimes meaningful growth begins with one honest realization and one small step.";


    reflection.textContent =
      message;

  }


  /* =======================================================
     SMALL STEP
     ======================================================= */

  function generateSmallStep() {

    const smallStep =
      get("smallStep");

    if (!smallStep) return;


    const answer =
      answers[0];


    const steps = [

      "Before saying yes to your next request, give yourself permission to say, “Let me think about it first.”",

      "When you catch yourself being harsh with yourself today, pause and ask: “Would I say this to someone I love?”",

      "Give yourself 15 minutes of guilt-free rest today. No productivity required.",

      "When comparison appears, remind yourself: “I am looking at their chapter, not their whole story.”",

      "Write down one small thing you would like to do for yourself—and take the first tiny step toward it."

    ];


    smallStep.textContent =
      steps[answer] ||
      steps[0];

  }


  /* =======================================================
     RANDOM INSPIRATION
     ======================================================= */

  function generateInspiration() {

    const quote =
      get("inspirationQuote");

    const author =
      get("inspirationAuthor");

    if (!quote) return;


    let randomIndex;


    do {

      randomIndex =
        Math.floor(
          Math.random() *
          inspirationMessages.length
        );

    } while (
      randomIndex ===
      lastInspirationIndex
    );


    lastInspirationIndex =
      randomIndex;


    const message =
      inspirationMessages[
        randomIndex
      ];


    quote.textContent =
      `“${message.text}”`;


    if (author) {

      author.textContent =
        `— ${message.author}`;

    }


    trackEvent(
      "ai_message_generated"
    );

  }


  /* =======================================================
     ANOTHER INSPIRATION BUTTON
     ======================================================= */

  const anotherInspiration =
    get("anotherInspiration");

  if (anotherInspiration) {

    anotherInspiration.addEventListener(
      "click",
      () => {

        generateInspiration();

      }
    );

  }


  /* =======================================================
     WORKPLACE WELLBEING BUTTON
     ======================================================= */

  const wellbeingButton =
    get("wellbeingButton");

  if (wellbeingButton) {

    wellbeingButton.addEventListener(
      "click",
      () => {

        trackEvent(
          "wellbeing_checkin_click"
        );

        window.open(
          ALISON_WELLBEING_URL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* =======================================================
     TABING GUHIT BUTTON
     ======================================================= */

  const tabingGuhitButton =
    get("tabingGuhitButton");

  if (tabingGuhitButton) {

    tabingGuhitButton.addEventListener(
      "click",
      () => {

        trackEvent(
          "tabing_guhit_click"
        );

        window.open(
          TABING_GUHIT_URL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* =======================================================
     CARE & SHARE
     ======================================================= */

  const shareButton =
    get("shareButton");

  const shareModal =
    get("shareModal");

  const closeShareModal =
    get("closeShareModal");

  const shareAgainButton =
    get("shareAgainButton");


  async function copyAcademyLink() {

    const link =
      SELF_LOVE_ACADEMY_URL;


    try {

      await navigator.clipboard.writeText(
        link
      );

    } catch (error) {

      const temporaryInput =
        document.createElement("input");

      temporaryInput.value =
        link;

      document.body.appendChild(
        temporaryInput
      );

      temporaryInput.select();

      document.execCommand(
        "copy"
      );

      temporaryInput.remove();

    }


    trackEvent(
      "share_link_clicked"
    );


    if (shareModal) {

      shareModal.hidden =
        false;

    }

  }


  if (shareButton) {

    shareButton.addEventListener(
      "click",
      copyAcademyLink
    );

  }


  if (shareAgainButton) {

    shareAgainButton.addEventListener(
      "click",
      copyAcademyLink
    );

  }


  if (closeShareModal) {

    closeShareModal.addEventListener(
      "click",
      () => {

        shareModal.hidden =
          true;

      }
    );

  }


  if (shareModal) {

    shareModal.addEventListener(
      "click",
      (event) => {

        if (
          event.target ===
          shareModal
        ) {

          shareModal.hidden =
            true;

        }

      }
    );

  }


  /* =======================================================
     ESCAPE KEY FOR MODAL
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        shareModal &&
        !shareModal.hidden
      ) {

        shareModal.hidden =
          true;

      }

    }
  );


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle =
    get("menuToggle");

  const navLinks =
    get("navLinks");


  if (
    menuToggle &&
    navLinks
  ) {

    menuToggle.addEventListener(
      "click",
      () => {

        navLinks.classList.toggle(
          "open"
        );

        const isOpen =
          navLinks.classList.contains(
            "open"
          );


        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

      }
    );


    navLinks
      .querySelectorAll("a")
      .forEach(
        (link) => {

          link.addEventListener(
            "click",
            () => {

              navLinks.classList.remove(
                "open"
              );

              menuToggle.setAttribute(
                "aria-expanded",
                "false"
              );

            }
          );

        }
      );

  }


  /* =======================================================
     INITIALIZE
     ======================================================= */

  loadQuestion();


  /* =======================================================
     INITIAL PAGE VIEW EVENT
     ======================================================= */

  trackEvent(
    "self_love_academy_view"
  );

});
