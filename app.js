/* =========================================================
   SELF LOVE ACADEMY
   Powered by CathiesNest Digital
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     LINKS
     ======================================================= */

  const TABING_GUHIT_URL =
    "https://cathiesnest.github.io/tabing-guhit-3.0/";

  const ALISON_WELLBEING_URL =
    "https://alison.com/psychometric-test/wellbeing?utm_source=alison_user&utm_medium=affiliate&utm_campaign=42404117";

  const SELF_LOVE_ACADEMY_URL =
    window.location.href.split("#")[0];


  /* =======================================================
     FIVE REFLECTION QUESTIONS
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
        "Being kind doesn't mean you have to say yes to everything.",
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
        "One moment cannot tell the whole story of who someone is — including you.",
        "Growth doesn't require perfection. Sometimes it simply requires the courage to continue.",
        "You know how to offer kindness. Maybe some of that kindness belongs to you, too.",
        "That realization alone can be powerful: the voice you use with yourself matters."
      ]
    },

    {
      question:
        "When you finally have free time, do you allow yourself to rest — or do you immediately look for something you should be doing?",

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
        "Every visible success has an invisible story behind it.",
        "What we see is rarely the whole picture. Comparison often leaves out everything happening behind the scenes.",
        "Your life does not need to follow someone else's calendar.",
        "Looking backward can remind you that you've already survived and grown through things you once thought you couldn't.",
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
        "Your happiness deserves consideration too — not only everyone else's expectations.",
        "You don't have to know the whole answer today. Sometimes the question itself opens the door."
      ]
    }

  ];


  /* =======================================================
     INSPIRATION MESSAGES
     ======================================================= */

  const inspirationMessages = [

    "With hardship comes ease. Keep your faith stronger than fear. Good days are coming.",

    "You don't have to have everything figured out. You only need enough courage for the next small step.",

    "Rest is not falling behind. Sometimes slowing down is how we find our way forward.",

    "Your worth was never measured by how much you could do for everyone else.",

    "You are allowed to outgrow the version of yourself that existed only to survive.",

    "Starting again does not erase how far you've already come.",

    "Be gentle with yourself. You are still becoming.",

    "Some seasons are for building. Some are for healing. Both are part of growth.",

    "You don't need permission to take care of yourself.",

    "Your next chapter does not have to look like anyone else's."

  ];


  /* =======================================================
     STATE
     ======================================================= */

  let currentQuestion = 0;

  const answers = [];

  let lastInspirationIndex = -1;


  /* =======================================================
     ELEMENTS
     ======================================================= */

  const questionCard =
    document.getElementById("questionCard");

  const questionText =
    document.getElementById("questionText");

  const answerOptions =
    document.getElementById("answerOptions");

  const questionCounter =
    document.getElementById("questionCounter");

  const progressPercent =
    document.getElementById("progressPercent");

  const progressBar =
    document.getElementById("progressBar");

  const tinyReflection =
    document.getElementById("tinyReflection");

  const nextQuestion =
    document.getElementById("nextQuestion");

  const reflectionResult =
    document.getElementById("reflectionResult");

  const personalReflection =
    document.getElementById("personalReflection");

  const smallStep =
    document.getElementById("smallStep");

  const inspirationText =
    document.getElementById("inspirationText");

  const inspirationAuthor =
    document.querySelector(".inspiration-author");

  const newInspiration =
    document.getElementById("newInspiration");

  const shareButton =
    document.getElementById("shareButton");

  const shareModal =
    document.getElementById("shareModal");

  const closeShareModal =
    document.getElementById("closeShareModal");

  const modalDone =
    document.getElementById("modalDone");

  const wellbeingButton =
    document.getElementById("wellbeingButton");

  const tabingGuhitButton =
    document.getElementById("tabingGuhitButton");

  const menuToggle =
    document.getElementById("menuToggle");

  const navLinks =
    document.getElementById("navLinks");


  /* =======================================================
     GOOGLE ANALYTICS
     ======================================================= */

  function trackEvent(eventName, parameters = {}) {

    if (
      typeof window.gtag === "function"
    ) {

      window.gtag(
        "event",
        eventName,
        parameters
      );

    }

  }


  /* =======================================================
     START REFLECTION
     ======================================================= */

  const startButton =
    document.querySelector(
      '.primary-button[href="#reflection"]'
    );

  if (startButton) {

    startButton.addEventListener(
      "click",
      () => {

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


    if (!item) {
      return;
    }


    if (questionCounter) {

      questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    }


    if (progressPercent) {

      const percentage =
        Math.round(
          ((currentQuestion + 1) /
            questions.length) *
          100
        );

      progressPercent.textContent =
        `${percentage}%`;

    }


    if (progressBar) {

      progressBar.style.width =
        `${((currentQuestion + 1) /
          questions.length) *
          100}%`;

    }


    if (questionText) {

      questionText.textContent =
        item.question;

    }


    if (answerOptions) {

      answerOptions.innerHTML = "";


      item.options.forEach(
        (option, index) => {

          const button =
            document.createElement("button");


          button.type =
            "button";


          button.className =
            "answer-option";


          button.dataset.answer =
            option;


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


          answerOptions.appendChild(
            button
          );

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


    if (nextQuestion) {

      nextQuestion.disabled =
        true;

      nextQuestion.textContent =
        currentQuestion ===
        questions.length - 1
          ? "See My Reflection →"
          : "Next Question →";

    }

  }


  /* =======================================================
     SELECT ANSWER
     ======================================================= */

  function selectAnswer(
    answerIndex,
    selectedButton
  ) {

    if (!answerOptions) {
      return;
    }


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


    if (nextQuestion) {

      nextQuestion.disabled =
        false;

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

  if (nextQuestion) {

    nextQuestion.addEventListener(
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


          if (questionCard) {

            questionCard.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          }

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


    generatePersonalReflection();

    generateSmallStep();

    generateInspiration();


    if (reflectionResult) {

      reflectionResult.hidden =
        false;


      reflectionResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }


  /* =======================================================
     PERSONAL REFLECTION
     ======================================================= */

  function generatePersonalReflection() {

    if (!personalReflection) {
      return;
    }


    const selectedAnswers =
      answers.map(
        (answer, index) => {

          if (
            answer === undefined
          ) {
            return "";

          }

          return questions[index]
            .options[answer];

        }
      );


    let message =
      "Your answers show that you are willing to pause and look at yourself with honesty. ";


    const boundary =
      selectedAnswers[0] || "";


    const selfTalk =
      selectedAnswers[1] || "";


    const rest =
      selectedAnswers[2] || "";


    const comparison =
      selectedAnswers[3] || "";


    const nextChapter =
      selectedAnswers[4] || "";


    if (
      boundary.includes(
        "disappointed"
      ) ||
      boundary.includes(
        "selfish"
      ) ||
      boundary.includes(
        "conflict"
      ) ||
      boundary.includes(
        "needed"
      )
    ) {

      message +=
        "You may sometimes carry the weight of other people's expectations. ";

    }


    if (
      selfTalk.includes(
        "harder on myself"
      ) ||
      selfTalk.includes(
        "mistake"
      )
    ) {

      message +=
        "You also recognize that the way you speak to yourself deserves kindness and attention. ";

    }


    if (
      rest.includes(
        "guilty"
      ) ||
      rest.includes(
        "task"
      ) ||
      rest.includes(
        "don't really know"
      )
    ) {

      message +=
        "Rest may be something you are still learning to give yourself without needing to justify it. ";

    }


    if (
      comparison.includes(
        "timeline"
      ) ||
      comparison.includes(
        "far I've come"
      )
    ) {

      message +=
        "There is also a reminder here that your journey has its own timing. ";

    }


    if (
      nextChapter.includes(
        "myself"
      ) ||
      nextChapter.includes(
        "boundary"
      ) ||
      nextChapter.includes(
        "happy"
      )
    ) {

      message +=
        "Perhaps your next chapter is asking you to make a little more room for what you need, not only what others expect from you. ";

    }


    message +=
      "You don't need to change everything at once. Meaningful growth can begin with one honest realization and one small step.";


    personalReflection.textContent =
      message;

  }


  /* =======================================================
     SMALL STEP
     ======================================================= */

  function generateSmallStep() {

    if (!smallStep) {
      return;
    }


    const selectedAnswer =
      answers[4];


    const steps = [

      "Before saying yes to your next request, give yourself permission to say, “Let me think about it first.”",

      "When you catch yourself being harsh with yourself today, pause and ask: “Would I say this to someone I love?”",

      "Give yourself 15 minutes of guilt-free rest today. No productivity required.",

      "When comparison appears, remind yourself: “I am looking at their chapter, not their whole story.”",

      "Write down one small thing you would like to do for yourself — and take the first tiny step toward it."

    ];


    smallStep.textContent =
      steps[
        typeof selectedAnswer === "number"
          ? selectedAnswer
          : 0
      ];

  }


  /* =======================================================
     RANDOM INSPIRATION
     ======================================================= */

  function generateInspiration() {

    if (!inspirationText) {
      return;
    }


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


    inspirationText.textContent =
      `“${inspirationMessages[randomIndex]}”`;


    if (inspirationAuthor) {

      inspirationAuthor.textContent =
        "— CathiesNest Digital";

    }


    trackEvent(
      "inspiration_generated"
    );

  }


  /* =======================================================
     GIVE ME ANOTHER
     ======================================================= */

  if (newInspiration) {

    newInspiration.addEventListener(
      "click",
      () => {

        generateInspiration();

      }
    );

  }


  /* =======================================================
     WORKPLACE WELLBEING
     ======================================================= */

  if (wellbeingButton) {

    wellbeingButton.addEventListener(
      "click",
      () => {

        trackEvent(
          "wellbeing_checkin_click"
        );

      }
    );

  }


  /* =======================================================
     TABING GUHIT
     ======================================================= */

  if (tabingGuhitButton) {

    tabingGuhitButton.addEventListener(
      "click",
      () => {

        trackEvent(
          "tabing_guhit_click"
        );

      }
    );

  }


  /* =======================================================
     CARE & SHARE
     ======================================================= */

  async function copyAcademyLink() {

    const link =
      SELF_LOVE_ACADEMY_URL;


    try {

      await navigator.clipboard.writeText(
        link
      );

    } catch (error) {

      const fallbackInput =
        document.createElement("input");

      fallbackInput.value =
        link;

      document.body.appendChild(
        fallbackInput
      );

      fallbackInput.select();

      document.execCommand(
        "copy"
      );

      fallbackInput.remove();

    }


    trackEvent(
      "share_link_clicked"
    );


    if (shareModal) {

      shareModal.hidden =
        false;

      document.body.classList.add(
        "modal-open"
      );

    }

  }


  if (shareButton) {

    shareButton.addEventListener(
      "click",
      copyAcademyLink
    );

  }


  /* =======================================================
     CLOSE SHARE CONFIRMATION
     ======================================================= */

  function closeShareConfirmation() {

    if (shareModal) {

      shareModal.hidden =
        true;

      document.body.classList.remove(
        "modal-open"
      );

    }

  }


  if (closeShareModal) {

    closeShareModal.addEventListener(
      "click",
      closeShareConfirmation
    );

  }


  if (modalDone) {

    modalDone.addEventListener(
      "click",
      closeShareConfirmation
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

          closeShareConfirmation();

        }

      }
    );

  }


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeShareConfirmation();

      }

    }
  );


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

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
     PAGE VIEW
     ======================================================= */

  trackEvent(
    "self_love_academy_view"
  );

});
