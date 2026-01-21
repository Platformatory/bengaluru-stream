---
layout: event
title: "Bangalore Streams meetup - May 2024 [Kafka Summit Special]"
date: 2024-05-04
time: 4:00pm - 8:00pm
location: Rakuten India Enterprise Private Limited
address: Rakuten India Enterprise Private Limited - Bagamane Pallavi Tower No. 20 1st Cross, Raja Ram Mohan Roy Rd, S.R Nagar Bengaluru, Karnataka, India, 560027
category: meetup
type: free
partners: Warpstream, Redpanda, RisingWave, Onehouse, Rakuten
mode: In-Person
description: Special interest group focused on event streaming and real time analytics
link: https://forms.gle/W5VQzvm4rQvwiRup9
map_link: https://goo.gl/maps/Zq93Fj9uhM39W2yKA
talks:
    - title: "Beyond Tiered Storage: Serverless Kafka with No Local Disks"
      speaker: Richard Artoul, WarpStream
      video: m9DMEpEhbeg
      slide: https://drive.google.com/file/d/1_v7gH7PHTE5GlZbRCW-su8fSpkaCnxy7/view?usp=sharing
    - title: Real-Time Predictions with Machine Learning & Redpanda Streaming Data Transforms
      speaker: Christina Lin, Redpanda
      video: EIE_Ad4qLjg
      slide: https://drive.google.com/file/d/1_v7gH7PHTE5GlZbRCW-su8fSpkaCnxy7/view?usp=sharing
    - title:  "Stream Processing in SQL: One Approach"
      speaker: Noel Kwan, RisingWave
      video: 1B5lEpIWcJI
      slide: https://drive.google.com/file/d/1pBCUCMXvhKmEWXzpbJWnRTIUy7Y2EKYP/view?usp=sharing
    - title:  Unlocking Seamless Streaming Ingestion with Apache Hudi and Kafka
      speaker: Sagar Sumit & Vinish Reddy, Onehouse
      video: PZyi1NWKBgs
      slide: https://drive.google.com/file/d/1KKBwQo3-b97b8yfAfTT4dRMidzVI7qqM/view?usp=sharing
---

<div class="about">
Hello Bengaluru
<br><br>
Platformatory is excited to host a special edition of the Bengaluru Streams meetup on May 4, right after Kafka Summit. Join us for an evening of exciting talks from Warpstream, Redpanda, RisingWave and OneHouse. This is a great opportunity to talk to, meet and learn from some of the newest innovators in the data infra space.<br><br>
<i>Please note:</i> <b>Since there are limited seats, we can only accommodate people who <a href="https://forms.gle/W5VQzvm4rQvwiRup9" target="_blank">register</a> . Only people completing the form and receiving a confirmation email will be able to attend.</b>
</div>

### Schedule

| Name                                                                             | Speaker                              | Start Time | End Time | Presentation                                                                                                                                          | Recording                                                  |
|----------------------------------------------------------------------------------|--------------------------------------|------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| Welcome and registration                                                         |                                      | 04:00 PM   | 04:10 PM |                                                                                                                                                       |                                                            |
| Beyond Tiered Storage: Serverless Kafka with No Local Disks                      | Richard Artoul, WarpStream           | 04:20 PM   | 05:00 PM | [Slides](https://drive.google.com/file/d/1_v7gH7PHTE5GlZbRCW-su8fSpkaCnxy7/view?usp=sharing){:target="\_blank"}                                       | [YouTube](https://youtu.be/m9DMEpEhbeg){:target="\_blank"} |
| Real-Time Predictions with Machine Learning & Redpanda Streaming Data Transforms | Christina Lin, Redpanda              | 05:00 PM   | 05:40 PM | [Slideshare](https://www.slideshare.net/slideshow/bangalore-meetup-enable-realtime-machine-learning-with-streaming-data/268219407){:target="\_blank"} | [YouTube](https://youtu.be/EIE_Ad4qLjg){:target="\_blank"} |
| Networking break with snacks                                                     |                                      | 05:40 PM   | 06:30 PM |                                                                                                                                                       |                                                            |
| Stream Processing in SQL: One Approach                                           | Noel Kwan, RisingWave                | 06:30 PM   | 07:10 PM | [Slides](https://drive.google.com/file/d/1pBCUCMXvhKmEWXzpbJWnRTIUy7Y2EKYP/view?usp=sharing){:target="\_blank"}                                       | [YouTube](https://youtu.be/1B5lEpIWcJI){:target="\_blank"} |
| Unlocking Seamless Streaming Ingestion with Apache Hudi and Kafka                | Sagar Sumit & Vinish Reddy, Onehouse | 07:10 PM   | 07:50 PM | [Slides](https://drive.google.com/file/d/1KKBwQo3-b97b8yfAfTT4dRMidzVI7qqM/view?usp=sharing){:target="\_blank"}                                       | [YouTube](https://youtu.be/PZyi1NWKBgs){:target="\_blank"} |



### Talks

- **Beyond Tiered Storage: Serverless Kafka with No Local Disks**

_Speaker:_ **Richard Artoul, Co-Founder @ WarpStream Labs**

_About the talk:_ Separation of compute and storage has become the de-facto standard in the data industry for batch processing.
The addition of tiered storage to open source Apache Kafka is the first step in bringing true separation of compute and storage to the streaming world.
In this talk, we'll discuss in technical detail how to take the concept of tiered storage to its logical extreme by building an Apache Kafka protocol compatible system that has zero local disks.
Eliminating all local disks in the system requires not only separating storage from compute, but also separating data from metadata. This is a monumental task that requires reimagining Kafka's architecture from the ground up, but the benefits are worth it.
This approach enables a stateless, elastic, and serverless deployment model that minimizes operational overhead and also drives inter-zone networking costs to almost zero.

- **Real-Time Predictions with Machine Learning & Redpanda Streaming Data Transforms**

_Speaker:_ **Christina Lin, Developer Advocate, Redpanda**

_About the talk:_  In this session, we'll address how to simplify data structures in AI applications, emphasizing the importance of not overcomplicating data architecture while constructing stateless pipelines for real-time analytics.<br>
We'll cover the creation of an efficient data platform using Redpanda data transforms powered by WebAssembly (WASM), particularly tailored for dynamic industries (we will use food delivery as an example). We'll show how to simplify your data stack and demonstrate with a lab how complex data structures often hinder the agility and performance of AI systems. The lab will focus on stateless pipelines, where each data item is processed independently, and showcases how to build scalable and robust AI applications without the burden of cumbersome data frameworks. Attendees will see how Redpanda's integration facilitates seamless real-time data processing and instant transformations that are crucial to responsive and accurate AI-driven predictions.<br>
We will cover:<br>
• Streamlined data ingestion and transformation<br>
• Real-time machine learning<br>
• Simplified infrastructure setup<br>
Participants will learn how to avoid common pitfalls associated with complex data structures and data stacks, and will gain insights into creating more effective, agile, and responsive applications – especially for AI. The methodologies are applicable across various industries and use cases.

- **Stream Processing in SQL: One Approach**

_Speaker:_ **Noel Kwan, Software Engineer at RisingWave Labs**

_About the talk:_  Join us for an exploration of real-time streaming data processing, where we’ll delve into RisingWave’s Stream Processing Model and interact with data streams using SQL.
In this session, we will begin by demonstrating the difference between batch and streaming data processing. We will then cover the internals of RisingWave’s architecture, such as decoupled compute and storage, and discuss how each RisingWave service operates.<br>
We will further dive into stateful and stateless streaming computations, examining aspects like the internal state of stateful computations and how it can be observed from RisingWave.
We will also explore RisingWave’s handling of batch queries and discuss the serving scenarios in which RisingWave excels.<br>
Next, we will cover data delivery and ingestion with external systems like Kafka, seamlessly integrating them to showcase how different systems can collaborate to provide various features.<br>
Finally, we will review a simple dashboard application for ride-hailing data and demonstrate these concepts.<br>
After this talk, developers should be more familiar with the batteries-included capabilities of RisingWave and understand how to simplify their stream processing workflows with RisingWave.

- **Unlocking Seamless Streaming Ingestion with Apache Hudi and Kafka**

_Speaker:_ **Sagar Sumit, Software Engineer at Onehouse && Vinish Reddy,Data Platform Engineer at Onehouse**

_About the talk:_ Join us as we explore Apache Hudi and its transformative utility, Hudi Streamer, for seamless data ingestion from various sources, including Apache Kafka. Learn how Hudi Streamer simplifies workflows with pluggable interfaces for extraction, key generation, and schema provision. We'll  also showcase real-time database replication using CDC, bridging Confluent Cloud platform and Onehouse managed lakehouse. Throughout the session, we'll highlight the synergy between Hudi and Kafka, empowering organizations to streamline data workflows and drive innovation. Whether you're a seasoned Kafka user, data engineer, or analytics enthusiast, this session equips you with the tools to harness Hudi's full potential in your Kafka ecosystem.

### Speakers

- {:.speaker-name} Richard Artoul <br> <span class="speaker-description">Co-Founder @ WarpStream Labs</span>
- {:.speaker-name} Christina Lin <br> <span class="speaker-description">Christina has 20+ years of experience in software development. She has worked as a developer, consultant, architect. She is an advocate for making innovative solutions down to earth and making them easily accessible for everyone. Skilled in Open Source technology such as Redpanda, Apache Camel, Kafka and Kubernetes, Ansible. https://www.linkedin.com/in/christina-lin-14a4b655/</span>
- {:.speaker-name} Noel Kwan <br> <span class="speaker-description">Noel works as a Database Kernel Engineer at RisingWave.​He focuses on performance and reliability and has worked on fuzzing tools such as SqlSmith and performance-related features such as Backfill. He studied at NUS, with an emphasis on programming languages.</span>
- {:.speaker-name} Sagar Sumit <br> <span class="speaker-description">Sagar Sumit is a Software Engineer at Onehouse and an Apache Hudi PMC member. Apart from Hudi, he is also a contributor to the Presto and Trino projects. In the past, he has worked on the team that built Amazon Aurora, a relational database built for the cloud, that now powers mission-critical applications for AWS customers.</span>
- {:.speaker-name} Vinish Reddy <br> <span class="speaker-description">Vinish Reddy is a Data Platform Engineer at Onehouse. He works on the Onehouse Data Plane services, and is a PMC member for Apache XTable. He previously worked in the payments team at Uber. He is passionate about solving challenging engineering problems and making an impact.</span>