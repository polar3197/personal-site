### Overview

Modern large language models are very capable. 

Today Matei Zaharia said, to a crowd at ScaledML, that AGI is here we just haven't figured out how to unlock it.

I have a small contract job to do document extraction for Stanford SLA (analytics lab in the Law School). I am sure as hell using this opportunity to see if - like Matei in his demonstration - I can get large model accuracy from small models using his lab's DSPy and GEPA prompt optimization libraries. 

This post explores finding maximum prompt impact on extraction accuracy. Upon reviewing those results a decision (determining cost effectiveness) will be made between using a large model or a smaller model.

### Models for comparison
```
model                | cost / input    | cost / output
---------------------------------------|------------------
1. Claude Sonnet 4.5 | $0.000003/token | $0.000015/token
2. Claude Haiku 4.5  | $0.000001/token | $0.000005/token
3. Llama 3.1 8b      | $0.00/token     | $0.00/token
```
Llama 3.1 8b is OSS and would require thorough compute, engineering and infrastructure to achieve any comprable accuracy. However, it is novel to explore and if I can wrangle compute I will start testing achieveable accuracy using small OSS models as the student role in GEPA.

### Evaluation metric
There are 2234 examples of pdfs with correctly extracted fields. I have chosen 176 random cases along with the expected extraction values. I then ran the following evaluation on the models above:
1. F1 score: avg("how accurate when listed" + "how often pieces aren't reported")
2. avergae and stdev F1 score across all 176 cases

An **important consideration** is that some prompts will generate better responses than others. However, in my approach, I first assume that a good prompt will be good across all models and a bad prompt will be bad across all models. I will be able to test this hypothesis later.

For now however, I will attempt to approximate how the models compare **before** prompt optimization; then I will run prompt optimization on the best performing OSS model, and potentially on a Claude model.

```
model                | F1 avg   | F1 stdev
---------------------|----------|----------
1. Claude Sonnet 4.5 |          | 
2. Claude Haiku 4.5  |          | 
3. Llama 3.1 8B      |          | 
```

#### Calculating F1 score
There is an example of ground truth extraction at the bottom of this page. In essence it is JSON with formulaic fields. 
- comparison for non-nested fields is a 1-1 comparison.
- comparison for fields like "disclosures" or "dno_defendants" will require more complex matching to catch minor mis-representations between elements that are truly the same.














```
{
    "allegations": {
        "allegation_type": "NAC",
        "rest_announcement_date": null,
        "rest_period_begin_date": null,
        "rest_period_end_date": null
    },
    "case_nid": 238254,
    "case_title": "Future Fintech Group Inc.",
    "class_period_end": "2024-01-11",
    "class_period_start": "2020-03-10",
    "company_defendants": [
        {
            "company_type": "I",
            "entity": {
                "id": 238080,
                "label": "Future FinTech Group Inc."
            },
            "violations": {
                "ov": [
                    "9(a) of the Exchange Act",
                    "9(f) of the Exchange Act"
                ],
                "sv": [
                    "10(b)",
                    "O"
                ]
            }
        }
    ],
    "disclosures": [
        {
            "date": "2020-03-10",
            "form": "8-K / Press Release",
            "types": [
                "M"
            ]
        },
        {
            "date": "2020-11-04",
            "form": "10-K/A",
            "types": [
                "M"
            ]
        },
        {
            "date": "2021-03-12",
            "form": "Other",
            "types": [
                "M"
            ]
        },
        {
            "date": "2021-04-15",
            "form": "10-K",
            "types": [
                "M"
            ]
        },
        {
            "date": "2023-03-22",
            "form": "10-K/A",
            "types": [
                "M"
            ]
        },
        {
            "date": "2023-04-29",
            "form": "10-K",
            "types": [
                "M"
            ]
        },
        {
            "date": "2024-01-11",
            "form": "Legal Proceedings",
            "types": [
                "C"
            ]
        }
    ],
    "dno_defendants": [
        {
            "board_committee_positions": [
                "NS"
            ],
            "entity": {
                "id": 238258,
                "label": "Shanchun Huang"
            },
            "general_d_o_classification": "ID",
            "officer_position": "CE",
            "other_defendant_char": [],
            "other_financial_position": null,
            "other_non_financial_position": null,
            "violations": {
                "ov": [
                    "9(a) of the Exchange Act",
                    "9(f) of the Exchange Act"
                ],
                "sv": [
                    "10(b)",
                    "20(a)",
                    "O"
                ]
            }
        },
        {
            "board_committee_positions": [
                "AU"
            ],
            "entity": {
                "id": 238259,
                "label": "Jing Chen"
            },
            "general_d_o_classification": "ID",
            "officer_position": "CF",
            "other_defendant_char": [],
            "other_financial_position": null,
            "other_non_financial_position": null,
            "violations": {
                "ov": [
                    "9(a) of the Exchange Act",
                    "9(f) of the Exchange Act"
                ],
                "sv": [
                    "10(b)",
                    "20(a)",
                    "O"
                ]
            }
        },
        {
            "board_committee_positions": [],
            "entity": {
                "id": 238260,
                "label": "Ming Yi"
            },
            "general_d_o_classification": "OF",
            "officer_position": "CF",
            "other_defendant_char": [],
            "other_financial_position": null,
            "other_non_financial_position": null,
            "violations": {
                "ov": [
                    "9(a) of the Exchange Act",
                    "9(f) of the Exchange Act"
                ],
                "sv": [
                    "10(b)",
                    "20(a)",
                    "O"
                ]
            }
        }
    ],
    "event_date": "2024-01-16",
    "event_name": "First Identified Complaint",
    "event_nid": 238255,
    "event_type_id": 13,
    "files": [
        {
            "durl": "/api/v3/file?file_id=62855&h=8a95a6ffcde701296fb51c2f2f9422aa",
            "file_id": 62855,
            "file_name": "Future Fintech FIC.pdf"
        }
    ],
    "plaintiff_lead_firm": [
        {
            "id": 1432,
            "label": "Rosen Law Firm"
        }
    ],
    "plaintiff_local_firm": [],
    "plaintiffs": [
        {
            "entity": {
                "id": 238257,
                "label": "Denise Labelle"
            },
            "plaintiff_type": "I"
        }
    ],
    "scienter": [
        "NA"
    ],
    "substantive_allegations": [
        "PM"
    ],
    "third_party_defendants": [],
    "violations": [
        "10(b)",
        "O",
        "20(a)"
    ]
}%  
```