### Problem
A PDF with a text layer is rendered by libraries like React-PDF and PDF.js by aligning an invisible HTML text layer infront of the image. The text layer is formatted in a way that can be converted to HTML DOM objects with styling. That said, these "spans" don't have much semantic significance, i.e. there is no clear alignment with sentences or punctuation of any kind.

I have prompted an LLM to extract legal fields from a sentence-indexed document and return indices it has deemed relevant to the classification of the extracted field. 

Now I must identify the pain point of highlighting text in the react PDF viewer.

1. It could be that extracting sentence indices is not compatible with the way a PDF text layer works — in that case I would need to prompt it to extract something else that translates to pdf text elements better
    - this seems like favoring a broken leg. Sentences are the fundamental unit of making sense for a user using the human-in-the-loop (HITL) service. Sentences are what should be highlighted, not geometries, and if possible, not character ranges (because that would still require highlighting of partial spans).

2. If I dont change the LLM output, then I have to change the way sentences structured in the pdf. 
    1. create sentence layer upon loading in the doc. pros: easily find a span that is indexed by sentence. cons: a)how will I highlight the sentence if it stretches across text element spans in an unpredictable way? b)A lot more DOM elements.
    2. get into the guts of pdf.js, force a split of each text element around punctuation. Pros: I can map sentence indices to a list of spans and highlight all of them without worrying about highlighting content not in the sentence. Cons: will splitting text elements in the text layer still allow for proper rendering?
    3. somehow, pdf.js allows highlighting across spans via the search. maybe I can match text and then have a function that explores previous and next spans until finding punctuation and then highlights based on coordinates? 