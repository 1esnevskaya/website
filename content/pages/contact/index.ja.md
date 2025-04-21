<!-- お問い合わせ開始 -->
        <section class="section">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-5 mb-4 pb-4">
                        <div class="d-flex contact-detail align-items-center mt-4">
                            <div class="flex-1 content mb-4">
                                <h4 class="title fw-bold mb-1">メールでお問い合わせ</h4>
                                <a href="mailto:hello@nocobase.com" class="text-primary">hello@nocobase.com</a>
                            </div>
                        </div>
                        <h4>私たちの所在地</h4>
                        <div class="p-4 bg-light rounded shadow mb-4">
                            私たちは、複数の国に拠点を持つリモートチームで、現在は以下のオフィスを展開しています。
                            <ul class="list-unstyled text-muted mb-0">
                                <li><i data-feather="arrow-right" class="text-primary fea icon-sm me-2"></i>シンガポール：#03-01, 112 Robinson Road, Singapore</li>
                                <li><i data-feather="arrow-right" class="text-primary fea icon-sm me-2"></i>日本：東京都北区赤羽1-55-8 501</li>
                            </ul>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-6">
                        <div class="card shadow border-0 rounded p-4">
                            <p class="text-muted para-desc fst-italic">フォームは現在構築中です。メールでお問い合わせください。</p>
                            <form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
                                <p id="error-msg" class="mb-0"></p>
                                <div id="simple-msg"></div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">お名前 <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <input name="name" id="name" type="text" class="form-control" placeholder="" disabled>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">メールアドレス <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <input name="email" id="email" type="email" class="form-control" placeholder="" disabled>
                                            </div>
                                        </div> 
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">会社名</label>
                                            <div class="position-relative">
                                                <input name="subject" id="subject" class="form-control" placeholder="" disabled>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">ユーザー規模 <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <select name="user-scale" id="user-scale" class="form-control" disabled>
                                                    <!-- <option value="50">小規模 - 50人未満</option> -->
                                                </select>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">職種 <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <select name="job-title" id="job-title" class="form-control" disabled>
                                                    <!-- <option value="volvo">Volvo</option> -->
                                                </select>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">お問い合わせ理由 <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <select name="reason" id="reason" class="form-control" disabled>
                                                    <!-- <option value="50">小規模 - 50人未満</option> -->
                                                </select>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">その他の情報</label>
                                            <div class="form-icon position-relative">
                                                <textarea name="comments" id="comments" rows="4" class="form-control" disabled></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="submit" id="submit" name="send" class="btn btn-primary" disabled>送信</button>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </form>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- お問い合わせ終了 -->