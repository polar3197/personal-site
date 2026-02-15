###  AI pipeline design choices

we have two options:

**1. use one LLM for extracting all fields**
```
4llm.txt -->|    _______
            |--> | LLM | --> extracted_fields.json
  prompt -->|    ––—––––
```
**2. use multiple LLMs in an agentic way**:

- manager LLM agent chops up document in text blocks believed to contain relevant field information
- sends relevant pieces to field-specialized agents (possible to tune with DSPy)
```
4lmm.txt->|                   |-> LLM for allegations ->|
          |  ______________   |->                     ->|  extracted       
          |->| LLM manager |->|->        ...          ->|->_fields
          |  ––—––––––—––––   |->                     ->|  .json
  prompt->|                   |-> LLM for disclosures ->|
```

for now option (1) should be enough, but if it isn't – or if I have free time later! – I will implement option (2).